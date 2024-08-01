/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'headerImage': "url('./src/assets/img/header3.jpg')",
      },

    },
  },
  plugins: [],
}

