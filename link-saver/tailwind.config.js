/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          dark: '#4338CA',
          light: '#6366F1',
        },
        secondary: {
          DEFAULT: '#7C3AED',
          dark: '#6D28D9',
          light: '#8B5CF6',
        },
        accent: {
          teal: '#14B8A6',
          coral: '#F97316',
          pink: '#EC4899',
        },
        dark: {
          DEFAULT: '#1F2937',
          deeper: '#111827',
          lighter: '#374151',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}