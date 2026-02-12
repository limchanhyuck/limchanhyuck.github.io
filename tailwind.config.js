/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0B1120',
          800: '#0F172A',
          700: '#1E293B',
          600: '#334155',
        },
        accent: {
          DEFAULT: '#38BDF8',
          light: '#7DD3FC',
          dark: '#0284C7',
        },
        muted: '#94A3B8',
        light: '#E2E8F0',
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        code: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
