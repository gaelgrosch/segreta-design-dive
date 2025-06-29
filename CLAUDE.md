# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on localhost:8080
- `npm run build` - Production build
- `npm run build:dev` - Development build 
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Architecture Overview

This is a React wedding website built with Vite, TypeScript, and shadcn/ui components. The application uses a minimal, elegant design aesthetic with clean typography and subtle animations.

### Key Architectural Patterns

**Component Structure:**
- Custom "Minimal" form components (`MinimalInput`, `MinimalRadio`, `MinimalCheckbox`, `MinimalTextarea`) that implement a consistent design system with underline borders and transparent backgrounds
- Standard shadcn/ui components in `src/components/ui/` for complex UI patterns
- Shared `WeddingHeader` component with navigation and active route highlighting

**Routing:**
- React Router with three main routes: `/` (Index), `/rsvp` (RSVP), and `*` (NotFound)
- Navigation handled in `WeddingHeader` with active state styling

**State Management:**
- React Query for server state management (QueryClient configured in App.tsx)
- Local component state with useState for form data
- Toast notifications using shadcn/ui toast system

**Styling:**
- Tailwind CSS with custom color system using CSS variables
- Minimal design with black/white/gray color palette
- Grid-based layouts with responsive breakpoints
- Custom styling focuses on typography, spacing, and subtle hover effects

### File Organization

- `src/pages/` - Main page components (Index, RSVP, NotFound)
- `src/components/` - Reusable components (custom Minimal* components, WeddingHeader)
- `src/components/ui/` - shadcn/ui component library
- `src/hooks/` - Custom React hooks (toast, mobile detection)
- `src/lib/` - Utility functions

### Design System

The application implements a minimalist wedding aesthetic:
- Typography: Light weight fonts with generous spacing
- Color scheme: Primarily black text on white backgrounds with gray placeholders
- Form styling: Transparent inputs with bottom borders that highlight on focus
- Buttons: Outlined style with hover fill effects
- Grid layouts: Responsive two-column layouts with image placeholders

### Notable Technical Details

- Vite configuration includes Lovable component tagger for development mode
- Path aliases configured for `@/` pointing to `src/`
- ESLint with React hooks and TypeScript rules
- shadcn/ui components configured with CSS variables for theming