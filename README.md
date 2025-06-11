# Dahs - Premium Hair Products

A modern, responsive website for a premium hair products brand, built with Next.js, React, TypeScript, and Tailwind CSS.

## Custom Fonts

This project uses the following custom fonts:

- **Montserrat** (from Google Fonts) for regular text
- **The Seasons** (commercial font) for headings and display text

### Installing The Seasons Font

1. Purchase The Seasons font from a legitimate source
2. Add the following files to the `public/fonts/theseasons/` directory:
   - `TheSeasons-Regular.woff2`
   - `TheSeasons-Bold.woff2`
3. Ensure the filenames match exactly as shown above
4. Restart the development server

**Note:** The Seasons is a commercial font. Make sure you have the proper license to use it in your project.

## Project Structure

The project has been organized to improve maintainability and scalability:

```
├── app/                 # Next.js app directory with routes
│   ├── about/           # About page
│   ├── connect/         # Contact page
│   ├── product/         # Product details page
│   ├── reviews/         # Reviews page
│   ├── shop/            # Shop page
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
│
├── components/          # React components
│   ├── layout/          # Layout components (Navbar, Footer)
│   ├── products/        # Product-related components
│   ├── sections/        # Page section components
│   ├── ui/              # Reusable UI components
│   └── index.ts         # Component exports
│
├── data/                # Mock data and constants
│   ├── products.ts      # Product data
│   └── index.ts         # Data exports
│
├── public/              # Static assets
│   ├── fonts/           # Custom font files
│   └── images/          # Image assets
│
├── types/               # TypeScript type definitions
│   ├── components.ts    # Component prop types
│   ├── product.ts       # Product-related types
│   └── index.ts         # Type exports
│
└── utils/               # Utility functions and helpers
    ├── animations.ts    # Animation utilities
    ├── constants.ts     # Application constants
    ├── formatters.ts    # Formatting utilities
    ├── hooks/           # Custom React hooks
    └── index.ts         # Utility exports
```

## Key Features

- Modern UI with animations using Framer Motion
- Responsive design for all screen sizes
- Type-safe code with TypeScript
- Component-based architecture
- Custom utility functions and hooks
- Clean and maintainable code structure

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Add required custom fonts (see Custom Fonts section above)
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Technologies Used

- **Next.js** - React framework
- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **GSAP** - Animation library

## Code Organization Principles

1. **Component Structure**: Components are organized by their functionality (UI, layout, sections, products)
2. **Type Safety**: Comprehensive TypeScript definitions for all components and data
3. **Reusability**: Common components and utilities are abstracted for reuse
4. **Clean Code**: Consistent naming conventions, documentation, and code style
5. **Single Responsibility**: Each file has a clear purpose and responsibility
6. **DRY Principle**: Common patterns are extracted into utilities and hooks

## Contact

For any questions or suggestions, please contact us at info@dahs.com 