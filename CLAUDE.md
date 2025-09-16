# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React application built with Vite that replicates a Salesforce CRM Einstein Engagement Scoring dashboard. The app showcases email engagement prediction data, subscriber retention metrics, and various prediction models using a modern React + Tailwind CSS stack.

## Development Commands

- `npm run dev` - Start the development server (runs on http://localhost:5173)
- `npm run build` - Build the production application
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## Architecture

### Key Technologies

- **React 19** - Component library
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework with CSS-based configuration
- **PostCSS** - CSS processing with `@tailwindcss/postcss` plugin

### Component Structure

The application follows a component-based architecture:

- `App.jsx` - Root component with layout structure
- `Header.jsx` - Salesforce-style header with navigation and branding
- `EinsteinEngagementScoring.jsx` - Main dashboard component with data table and subscriber retention metrics
- `PredictionCards.jsx` - Grid of prediction cards (Email Open, Email Click, Web Conversion)

### Styling Configuration

**Important**: This project uses Tailwind CSS v4, which has a different configuration approach:

- CSS-based theming in `src/index.css` using `@theme` blocks
- Custom Salesforce color palette defined as CSS custom properties (`--color-sf-*`)
- PostCSS configuration uses `@tailwindcss/postcss` plugin (not the legacy `tailwindcss` plugin)
- No separate `tailwind.config.js` file is needed for v4

### Data Structure

The dashboard displays mock data representing:

- Email engagement prediction matrix (likelihood vs. subscriber segments)
- Subscriber retention percentage (99.96%)
- Audience health indicators
- Multiple prediction models with confidence levels

## Key Implementation Details

- Uses Inter font family imported from Google Fonts
- Responsive design with `max-w-7xl` container
- Component props include pre-structured data arrays for tables and metrics
- Color coding system for data visualization (blue, gray, green backgrounds for different data points)
- SVG icons for interface elements and indicators