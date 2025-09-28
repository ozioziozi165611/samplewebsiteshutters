# Elite Shutters & Blinds Website

## Overview

This is a premium shutters and blinds business website built as a full-stack web application. The project showcases window treatments with an emphasis on visual storytelling, lifestyle photography, and editorial design approach inspired by high-end home improvement brands. The website features product galleries, before/after transformations, testimonials, and contact forms to drive customer engagement and conversions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system using CSS variables for theming
- **UI Components**: Shadcn/ui component library with Radix UI primitives for accessibility
- **Build Tool**: Vite for fast development and optimized builds
- **State Management**: React Query (TanStack Query) for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript for full-stack type safety
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Data Storage**: In-memory storage with PostgreSQL schema definitions (ready for migration)
- **API Design**: RESTful API with `/api` prefix for all backend routes

### Design System
- **Color Scheme**: Deep charcoal primary (220 15% 20%) with warm white (45 25% 96%) and soft sage accent (140 25% 65%)
- **Typography**: Inter font family with hierarchical weight system (400, 500, 700)
- **Layout**: 12-column responsive grid with Tailwind spacing units (4, 8, 16)
- **Components**: Consistent elevation system with hover states and smooth transitions

### Database Schema
- **Users Table**: Basic authentication structure with username/password
- **Projects Table**: Portfolio items with categories (Shutters, Blinds, Roller, Venetian), images array, and metadata
- **Schema Validation**: Zod schemas for runtime type checking and API validation

### Content Architecture
- **Maximum 4 Sections**: Hero, Product Gallery, Before/After Transformations, Contact & Info
- **Visual Priority**: Large hero images, lifestyle photography, before/after sliders
- **Interactive Elements**: Carousel components, filterable galleries, smooth scrolling navigation

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **TypeScript**: Full-stack type safety with strict configuration
- **Vite**: Build tool with hot module replacement and optimization
- **Express.js**: Web server framework for API routes

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Shadcn/ui**: Pre-built component library
- **Radix UI**: Accessible component primitives for complex UI elements
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe component variants

### Database and Data Management
- **Drizzle ORM**: Type-safe PostgreSQL ORM with migration support
- **Neon Database**: PostgreSQL hosting service (serverless)
- **Drizzle Kit**: Database migration and schema management tools
- **Zod**: Runtime type validation for API and form data

### Development Tools
- **Replit Plugins**: Development environment integration
- **ESBuild**: Fast bundling for production builds
- **PostCSS**: CSS processing with Autoprefixer

### Form and Data Handling
- **React Hook Form**: Form state management with validation
- **TanStack Query**: Server state management and caching
- **Date-fns**: Date manipulation and formatting utilities

### Interactive Components
- **Embla Carousel**: Touch-friendly carousel implementation
- **React Day Picker**: Calendar and date selection components
- **Vaul**: Drawer/modal components for mobile interactions