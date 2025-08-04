'use client'

import Link from 'next/link'
import { useUser } from '@/contexts/UserContext'
import { Button } from '@/components/ui/button'
import { UserIcon, HomeIcon, PlusIcon, LogOutIcon, Users } from 'lucide-react'

export function Navigation() {
  const { user, logout } = useUser()

  return (
   <header className="w-4/5 lg:px-6 h-14 flex items-center justify-center border-b">
         <Link className="flex items-center justify-center" href="/">
          <Users className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">WeConnect</span>
        </Link>

        {user ? (
          <div className="ml-auto flex gap-4 sm:gap-6">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <HomeIcon size={16} />
                <span>Home</span>
              </Button>
            </Link>
            <Link href="/create-post">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <PlusIcon size={16} />
                <span>Create Post</span>
              </Button>
            </Link>
            <Link href={`/profile/${user.id}`}>
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <UserIcon size={16} />
                <span>Profile</span>
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={logout}
              className="flex items-center space-x-2"
            >
              <LogOutIcon size={16} />
              <span>Logout</span>
            </Button>
          </div>
        ) : (
           <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="/login">
            <Button variant="outline" size="sm" className="flex items-center space-x-2">
               Login
              </Button>
          </Link>
        </nav>
        )}
    </header>
  )
}
