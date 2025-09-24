/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode via class strategy
  theme: {
    extend: {
      colors: {
        primary: { 
          DEFAULT: '#FFDD5F',
          dark: '#DEC91B' 
        },
        secondary: { 
          DEFAULT: '#053F44',
          dark: '#0A7A85' 
        },
        accent: { 
          DEFAULT: '#10B981',
          dark: '#059669' 
        },
        background: { 
          DEFAULT: '#F3F4F6',
          dark: '#121212' 
        },
        textMain: { 
          DEFAULT: '#1F2937',
          dark: '#F7F9F9' 
        },
        greyLight: '#2A2A2A',
        greyDark: '#121212'
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 4s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}