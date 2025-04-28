# Finance SaaS Platform Tracker Tutorial (Claude)

## Build Setup

### Core Technologies
- **TypeScript** - Strongly typed programming language built on JavaScript
- **ESLint** - Code linting tool
- **Tailwind CSS** - Utility-first CSS framework
- **Next.js App Router** - Framework for routing in our application
- **Bun** - JavaScript runtime and build tool (use `bun run dev` to start the development server)
- **ShadCN/UI** - Component library using Slate as the base color and CSS variables in `app/globals.css`

### Project Structure
- **No src directory** - Using the root directory for project files
- **Default import alias** - Using the default `@/*` alias (e.g., `@/components`)
- **components/ui/** - Contains ShadCN/UI components that we can customize
- **app folder** - Contains client and server routing
  - **page.tsx** - Reserved file name for Next.js pages which defines a route

## Authentication & Route Protection

### Routing Fundamentals
- **Basic routing**: Create a folder inside `app/` with a `page.tsx` file that has a default export
- **Route groups**: Create folders that don't affect the URL by using parentheses
  - Example: `app/(auth)/sign-in/page.tsx` creates a route at `/sign-in` (not `/auth/sign-in`)
  - This helps organize files without affecting the URL structure

### Authentication Setup
- **Clerk** - Authentication and authorization library for Next.js
  - Install with: `bun add @clerk/nextjs`
  - Provides user session management, authentication, and authorization

### Protected Routes
- **Catch-all routes** - Routes that can accept parameters (like UserIDs)
- Combining route groups with Clerk authentication ensures users are redirected to login when trying to access protected content

### Next Steps
- Building Sign-In and Sign-Up pages using Clerk components
- Creating protected dashboard routes
- Implementing API routes with Hono library

## Sign-In Page Documentation

### Overview
This code implements a responsive sign-in page using Clerk authentication for a Finance SaaS Platform. The page features a welcome message and Clerk's authentication component with a loading state.

### Components Used

#### External Components
- `Loader2` from `lucide-react` - Provides a loading spinner animation
- `SignIn`, `ClerkLoaded`, `ClerkLoading` from `@clerk/nextjs` - Clerk authentication components

#### Page Structure
The page uses a responsive grid layout that adapts between mobile and desktop views:
- Single column on mobile devices
- Two columns on larger screens (lg breakpoint and above)

### Key Features

#### Responsive Design
- Uses Tailwind CSS for mobile-first responsive design
- `grid-cols-1` for mobile, `lg:grid-cols-2` for desktop

#### Authentication Flow
- `SignIn` component from Clerk handles the authentication process
- Authentication path is set to `/sign-in`

#### Loading States
- `ClerkLoaded` displays the sign-in form when Clerk is fully loaded
- `ClerkLoading` shows an animated spinner while Clerk is initializing
- Spinner uses `animate-spin` for rotation animation
- Styled with `text-muted-foreground` for appropriate color

#### Visual Design
- Welcome message with "Welcome Back!" header in dark purple (`#2E2A47`)
- Subtext in muted blue-gray (`#7E8CA0`)
- Centered content with appropriate spacing using:
  - `space-y-4` for vertical spacing between text elements
  - `mt-8` to add margin between text and sign-in form
  - `px-4` for horizontal padding

### Implementation Notes
- Content is vertically centered on desktop screens using `flex`, `items-center`, and `justify-center`
- The page maintains a minimum height of the viewport with `min-h-screen`