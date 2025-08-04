'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { UserIcon, ClockIcon, MailIcon, CalendarIcon } from 'lucide-react'
import toast from 'react-hot-toast'

interface User {
  id: string
  name: string
  email: string
  bio?: string
  createdAt: string
  posts: Array<{
    id: string
    content: string
    createdAt: string
    author: {
      id: string
      name: string
      email: string
      bio?: string
    }
  }>
}

export default function ProfilePage({ params }: { params: Promise<{ userId: string }> }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    params.then(({ userId }) => {
      fetchUser(userId)
    })
  }, [params])

  const fetchUser = async (userId: string) => {
    try {
      const response = await fetch(`/api/users/${userId}`)
      const data = await response.json()
      
      if (response.ok) {
        setUser(data.user)
      } else {
        switch (response.status) {
          case 404:
            toast.error('User not found')
            break
          case 500:
            toast.error('Server error. Please try again later.')
            break
          default:
            toast.error(data.error || 'Failed to load profile')
        }
      }
    } catch (error) {
      console.error('Error fetching user:', error)
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

  const formatJoinDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    })
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center min-h-screen  bg-gray-50">
        <Navigation />
        <main className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-2 text-gray-600">Loading profile...</p>
          </div>
        </main>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center bg-gray-50">
        <Navigation />
        <main className="max-w-4xl mx-auto px-4 py-8">
          <Card>
            <CardContent className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Profile Not Found</h3>
              <p className="text-gray-600">The requested user profile could not be found.</p>
            </CardContent>
          </Card>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="md:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserIcon size={32} className="text-blue-600" />
                  </div>
                  <h1 className="text-xl font-bold text-gray-900 mb-2">{user.name}</h1>
                  {user.bio && (
                    <p className="text-gray-600 mb-4">{user.bio}</p>
                  )}
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center justify-center space-x-2">
                      <MailIcon size={16} />
                      <span>{user.email}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <CalendarIcon size={16} />
                      <span>Joined {formatJoinDate(user.createdAt)}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-4">
              <CardContent className="pt-6">
                <h3 className="font-medium text-gray-900 mb-2">Activity</h3>
                <div className="text-sm text-gray-600">
                  <div>{user.posts.length} posts</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Posts */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Posts by {user.name}
            </h2>

            {user.posts.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No posts yet</h3>
                  <p className="text-gray-600">This user hasn't shared anything yet.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {user.posts.map((post) => (
                  <Card key={post.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
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
                            <span className="text-gray-500">•</span>
                            <div className="flex items-center space-x-1 text-gray-500 text-sm">
                              <ClockIcon size={14} />
                              <span>{formatDate(post.createdAt)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-900 whitespace-pre-wrap">{post.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
