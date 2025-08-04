import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from '@/lib/auth'

export async function middleware(request: NextRequest) {
  
  const token = request.cookies.get('token')?.value

 
  const protectedPaths = ['/dashboard', '/profile', '/create-post']
  const isProtectedPath = protectedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  )

  // Redirect to login if accessing protected path without token
  if (isProtectedPath && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Verify token if present
  if (token) {
    const payload = await verifyToken(token)
    if (!payload && isProtectedPath) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  // Redirect authenticated users away from auth pages
  const authPaths = ['/login', '/register']
  const isAuthPath = authPaths.includes(request.nextUrl.pathname)
  
  if (isAuthPath && token) {
    const payload = await verifyToken(token)
    if (payload) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
