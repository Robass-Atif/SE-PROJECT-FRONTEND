/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        'custom-violet': '#5433FF',
        'custom-blue': '#4379FF',
        'custom-cyan': '#1CC6FF',
        'custom-badami': '#97FBD1',
        'custom-pink': '#F6A4EC'
      },
    },
  },
  plugins: [],
}

