/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cowboy: {
          dark: '#1A0F0A',
          brown: '#2C1B0E',
          orange: '#D4731A',
          gold: '#C9A227',
          cream: '#F5E6C8',
          dust: '#A89279',
          red: '#8B2500',
          navy: '#0D1B2A',
        },
      },
      fontFamily: {
        western: ['Rye', 'serif'],
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        code: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
