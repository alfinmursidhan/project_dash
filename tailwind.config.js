/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#39644a',
        secondary: '#f6efdc',
        accent: '#E8B87D',
        'text-primary': '#39644a',
        'text-secondary': '#f6efdc'
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
        serif: ['var(--font-the-seasons)', 'serif'],
        'the-seasons': ['var(--font-the-seasons)', 'serif'],
        'carelia': ['var(--font-carelia)', 'serif'],
      },
    },
  },
  plugins: [],
} 