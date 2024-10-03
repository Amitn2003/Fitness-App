/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {colors: {
      primary: '#4F46E5', // Indigo
      secondary: '#F59E0B', // Amber
      background: '#F3F4F6', // Light Gray
      accent: '#34D399', // Green
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      heading: ['Poppins', 'sans-serif'],
    },
  },
  },
  plugins: [],
}

