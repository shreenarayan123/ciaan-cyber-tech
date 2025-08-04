import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { loginSchema } from '@/lib/schemas'
import { comparePassword, createToken } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const result = loginSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { 
          error: 'Invalid input', 
          details: result.error.issues.map(issue => ({
            path: issue.path,
            message: issue.message
          }))
        },
        { status: 400 }
      )
    }

    const { email, password } = result.data

    // Find user
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    // Verify password
    const isValidPassword = await comparePassword(password, user.password)
    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    // Create token
    const token = await createToken({ userId: user.id, email: user.email })

    // Set HTTP-only cookie
    const response = NextResponse.json(
      { 
        message: 'Login successful', 
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          bio: user.bio,
        }
      },
      { status: 200 }
    )

    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, 
    })

    return response
  } catch (error) {
    console.error('Login error:', error)
    
    // Handle Prisma errors
    if (error instanceof Error) {
      if (error.message.includes('connection')) {
        return NextResponse.json(
          { error: 'Database connection error. Please try again later.' },
          { status: 503 }
        )
      }
    }
    
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}
