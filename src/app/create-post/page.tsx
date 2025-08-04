'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Navigation } from '@/components/Navigation'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import toast from 'react-hot-toast'

export default function CreatePost() {
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!content.trim()) {
      toast.error('Post content is required')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: content.trim() }),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('Post created successfully!')
        router.push('/dashboard')
      } else {
        switch (response.status) {
          case 400:
            if (data.details && Array.isArray(data.details)) {
              data.details.forEach((error: any) => {
                toast.error(`${error.path.join('.')}: ${error.message}`)
              })
            } else {
              toast.error('Please check your input and try again.')
            }
            break
          case 401:
            toast.error('You must be logged in to create a post.')
            router.push('/login')
            break
          case 500:
            toast.error('Server error. Please try again later.')
            break
          default:
            toast.error(data.error || 'Failed to create post')
        }
      }
    } catch (error) {
      console.error('Create post error:', error)
      toast.error('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-2xl mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Create New Post</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="content">What's on your mind?</Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Share your thoughts, insights, or updates with the community..."
                  className="mt-1 min-h-32"
                  maxLength={500}
                  disabled={loading}
                />
                <div className="text-sm text-gray-500 mt-1">
                  {content.length}/500 characters
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button type="submit" disabled={loading || !content.trim()}>
                  {loading ? 'Publishing...' : 'Publish Post'}
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => router.back()}
                  disabled={loading}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
