'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface User {
  id: string
  name: string
  email: string
  bio?: string
}

interface UserContextType {
  user: User | null
  setUser: (user: User | null) => void
  logout: () => void
  loading: boolean
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in on mount
    fetch('/api/auth/me')
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        throw new Error('Not authenticated')
      })
      .then(data => {
        if (data.user) {
          setUser(data.user)
        }
      })
      .catch(() => {
        // User not logged in - this is expected
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const logout = async () => {
    try {
      const response = await fetch('/api/auth/logout', { method: 'POST' })
      
      if (response.ok) {
        setUser(null)
        toast.success('Successfully logged out')
        window.location.href = '/login'
      } else {
        throw new Error('Logout failed')
      }
    } catch (error) {
      console.error('Logout error:', error)
      toast.error('Error logging out. Please try again.')
      // Still try to clear user state
      setUser(null)
      window.location.href = '/login'
    }
  }

  return (
    <UserContext.Provider value={{ user, setUser, logout, loading }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
