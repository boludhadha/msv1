/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        gray: {
          50: '#f9f9f9',
          100: '#f2f2f2',
          200: '#e0e0e0',
          300: '#d0d0d0',
          400: '#c0c0c0',
          500: '#a7a7a7',
          600: '#6e6e6e',
          700: '#4d4d4d',
          800: '#262626',
          900: '#171717',
        },
      },
    },
  },
  plugins: [],
}