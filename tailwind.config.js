/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        surface: '#F0FDF4',
        primary: '#16A34A',
        'primary-dark': '#14532D',
        'primary-mid': '#166534',
        'border-green': '#BBF7D0',
        muted: '#4ADE80',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
