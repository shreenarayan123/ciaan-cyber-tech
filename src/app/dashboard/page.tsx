'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { UserIcon, ClockIcon, PlusIcon } from 'lucide-react'
import { useUser } from '@/contexts/UserContext'
import toast from 'react-hot-toast'

interface Post {
  id: string
  content: string
  createdAt: string
  author: {
    id: string
    name: string
    email: string
    bio?: string
  }
}

export default function Dashboard() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const { user, loading: userLoading } = useUser()

  useEffect(() => {
    if (!userLoading) {
      fetchPosts()
    }
  }, [userLoading])

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts')
      
      if (response.ok) {
        const data = await response.json()
        setPosts(data.posts)
      } else {
        switch (response.status) {
          case 404:
            toast.error('Posts not found')
            break
          case 500:
            toast.error('Server error. Please try again later.')
            break
          default:
            toast.error('Failed to load posts')
        }
      }
    } catch (error) {
      console.error('Error fetching posts:', error)
      toast.error('Network error. Please check your connection.')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="flex flex-col items-center min-h-screen  bg-gray-50">
      <Navigation />
      
      <main className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Home Feed</h1>
          <Link href="/create-post">
            <Button className="flex items-center space-x-2">
              <PlusIcon size={16} />
              <span>Create Post</span>
            </Button>
          </Link>
        </div>

        {loading ? (
          <div className="text-center py-8">
            <div className="text-gray-600">Loading posts...</div>
          </div>
        ) : posts.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No posts yet</h3>
              <p className="text-gray-600 mb-4">Be the first to share something with the community!</p>
              <Link href="/create-post">
                <Button>Create Your First Post</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <Card key={post.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-0 mb-0">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <UserIcon size={20} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <Link 
                          href={`/profile/${post.author.id}`}
                          className="font-medium text-gray-900 hover:text-blue-600"
                        >
                          {post.author.name}
                        </Link>
                      </div>
                      {post.author.bio && (
                        <p className="text-sm text-gray-600 mt-1">{post.author.bio}</p>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 mt-0">
                  <p className="text-gray-900 whitespace-pre-wrap">{post.content}</p>
                  <div className="flex items-center space-x-1 text-gray-500 text-sm pt-3">
                          <span>{formatDate(post.createdAt)}</span>
                        </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
