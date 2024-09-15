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
      },
    },
  },
  plugins: [],
}

