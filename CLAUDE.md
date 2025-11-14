# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 portfolio website for Thiago Fernando Rech, a Back-End Developer. The site is built with TypeScript, React 19, and Tailwind CSS 4, featuring a professional portfolio with sections for about, experience, projects, and contact information.

## Key Technologies

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with PostCSS
- **UI Components**: Lucide React for icons
- **Animations**: Framer Motion for smooth animations  
- **Forms**: React Hook Form with Zod validation
- **Email Service**: EmailJS for contact form functionality
- **Content**: Gray Matter and Remark for blog/markdown processing
- **Date Handling**: date-fns library

## Development Commands

```bash
# Start development server with Turbopack (faster builds)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## Architecture

### App Structure
- **App Router**: Uses Next.js 15 App Router (`src/app/`)
- **Components**: Reusable UI components in `src/components/`
- **Data**: Project information and configuration in `src/data/`
- **Assets**: Static images in `src/asset/` and `public/`

### Key Components
- `Header.tsx`: Navigation with mobile menu toggle
- `ProjectCard.tsx`: Individual project display cards
- `ContactForm.tsx`: Form with EmailJS integration and Zod validation
- `ScrollToTop.tsx`: Scroll to top functionality

### Data Management
- `projects.ts`: Contains project definitions, categories, and filtering options
- Project interface defines structure for portfolio items
- Static data approach (no external CMS)

### Styling Approach
- Custom CSS in `globals.css` with CSS custom properties
- Responsive design with mobile-first approach
- Framer Motion for page transitions and animations
- Component-based styling without CSS modules

## Configuration Files

- `next.config.ts`: Next.js configuration with standalone output
- `tsconfig.json`: TypeScript configuration with path aliases (`@/*` → `src/*`)
- `eslint.config.mjs`: ESLint configuration extending Next.js rules
- `postcss.config.mjs`: PostCSS configuration for Tailwind CSS
- `Dockerfile`: Multi-stage Docker build for production deployment

## Environment Variables

The contact form requires EmailJS configuration:
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_CV_URL` (optional, for CV download link)

## Deployment

- **Docker**: Multi-stage Dockerfile optimized for production
- **Output**: Configured for standalone builds
- **Security**: Runs as non-privileged user (nextjs:nodejs)

## Content Structure

The site is a single-page application with sections:
- Hero/Introduction
- About (skills, experience summary)
- Professional Experience (timeline)
- Services Offered
- Achievements
- Projects (filterable by category and year)
- Contact Form

Projects are categorized as: web, mobile, desktop, ai, iot
Years available: 2022, 2023, 2024

## Important Notes

- The site is in Portuguese (pt-BR locale)
- Uses semantic HTML with proper meta tags for SEO
- Includes structured data (JSON-LD) for better search indexing
- Form validation uses Zod schemas for type safety
- All external links include proper `rel="noopener noreferrer"`