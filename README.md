# WeConnect - Community Platform

A modern LinkedIn-inspired community platform built with Next.js, TypeScript, Prisma, and PostgreSQL. WeConnect provides a clean, professional networking experience focused on meaningful connections.

## Features

### 🔐 **User Authentication**
- Secure register/login with email and password
- JWT authentication with HTTP-only cookies
- Password hashing with bcryptjs
- Protected routes with middleware

### 👤 **User Profiles**
- Comprehensive profiles with name, email, and bio
- Activity statistics and join date
- User post history
- Professional avatar placeholders

### 📝 **Post Management**
- Create text-only posts (up to 500 characters)
- Public feed displaying all posts with timestamps
- Real-time character counter
- Author information with each post

### 🏠 **Enhanced Landing Page**
- Professional hero section
- Feature highlights
- User testimonials
- How it works section
- Call-to-action components
- Responsive footer

### 🛡️ **Error Handling & UX**
- React Hot Toast notifications
- Comprehensive error boundaries
- Loading states and animations
- Form validation with Zod
- Network error handling - Community Platform

A LinkedIn-inspired community platform built with Next.js, TypeScript, Prisma, and PostgreSQL.

## Features

- **User Authentication**: Register/Login with email and password
- **User Profiles**: View profiles with name, email, bio, and user posts
- **Post Feed**: Create and view text-only posts with timestamps
- **Public Posts**: Home feed showing all posts with author information
- **Profile Pages**: Individual user profiles displaying their posts

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS v4, Shadcn/ui components
- **Backend**: Next.js API routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT with HTTP-only cookies
- **Validation**: Zod schemas
- **UI/UX**: React Hot Toast, Lucide React icons
- **Error Handling**: Error boundaries, comprehensive error states

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cian-cyber-tech
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your database URL and JWT secret:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/weconnect"
   JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
   NODE_ENV="development"
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npm run db:generate
   
   # Push schema to database (for development)
   npm run db:push
   
   # Or run migrations (for production)
   npm run db:migrate
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## Database Scripts

- `npm run db:generate` - Generate Prisma client
- `npm run db:push` - Push schema to database (development)
- `npm run db:migrate` - Run database migrations
- `npm run db:reset` - Reset database and run migrations
- `npm run db:studio` - Open Prisma Studio

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── auth/         # Authentication endpoints
│   │   ├── posts/        # Posts endpoints
│   │   └── users/        # User endpoints
│   ├── dashboard/        # Home feed page
│   ├── login/            # Login page
│   ├── register/         # Registration page
│   ├── create-post/      # Post creation page
│   ├── profile/[userId]/ # User profile page
│   ├── layout.tsx        # Root layout with providers
│   └── page.tsx          # Enhanced landing page
├── components/            # React components
│   ├── ui/               # Shadcn/ui components
│   ├── Navigation.tsx    # Navigation component
│   ├── Hero.tsx          # Landing page hero section
│   ├── Features.tsx      # Features showcase
│   ├── HowItWorks.tsx    # How it works section
│   ├── Testimonial.tsx   # User testimonials
│   ├── CTA.tsx           # Call-to-action component
│   ├── Footer.tsx        # Footer component
│   └── ErrorBoundary.tsx # Error boundary component
├── contexts/             # React contexts
│   └── UserContext.tsx   # User authentication context
├── lib/                  # Utility libraries
│   ├── auth.ts          # Authentication utilities
│   ├── prisma.ts        # Prisma client
│   ├── schemas.ts       # Zod validation schemas
│   └── utils.ts         # General utilities
├── middleware.ts         # Next.js middleware for auth
└── generated/            # Generated files
    └── prisma/          # Generated Prisma client
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user

### Posts
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create new post

### Users
- `GET /api/users/[userId]` - Get user profile and posts

## Features Overview

### Landing Page Experience
- **Hero Section**: Professional welcome with clear value proposition
- **Features Showcase**: Highlighting key platform capabilities
- **How It Works**: Step-by-step guide for new users
- **Testimonials**: Community feedback and success stories
- **Call-to-Action**: Seamless conversion to registration

### User Authentication
- Secure registration and login with email/password
- JWT tokens stored in HTTP-only cookies
- Password hashing with bcryptjs
- Protected routes with middleware
- Enhanced error handling with toast notifications

### Post Management
- Create text-only posts (up to 500 characters)
- Public feed showing all posts with author information
- Real-time timestamps with relative time display
- Character counter for post creation
- Optimistic UI updates

### User Profiles
- View individual user profiles
- Display user information (name, email, bio, join date)
- Show all posts by the user with pagination-ready structure
- Activity statistics and engagement metrics
- Professional avatar placeholders

### Enhanced User Experience
- **Toast Notifications**: Real-time feedback for all actions
- **Loading States**: Smooth loading animations and skeletons
- **Error Boundaries**: Graceful error handling and recovery
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: WCAG compliant components and interactions

### Security Features
- Password hashing with industry-standard algorithms
- JWT authentication with secure cookie storage
- HTTP-only cookies preventing XSS attacks
- Input validation with comprehensive Zod schemas
- CSRF protection through same-site cookies
- SQL injection prevention via Prisma ORM

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests if applicable
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Submit a pull request

## Performance & Best Practices

- **Code Splitting**: Automatic route-based code splitting with Next.js
- **Image Optimization**: Next.js Image component for optimal loading
- **SEO Ready**: Meta tags and structured data for search engines
- **TypeScript**: Full type safety across the entire application
- **Error Monitoring**: Comprehensive error tracking and logging
- **Database Optimization**: Efficient queries with Prisma ORM

## Deployment

The application is ready for deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- **Docker** (containerized deployment)

For production deployment:
1. Set up a PostgreSQL database
2. Configure environment variables
3. Run database migrations
4. Deploy the application

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ using Next.js, TypeScript, and modern web technologies.**
