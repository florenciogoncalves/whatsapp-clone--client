/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**.vue",
    "./src/**/*.vue",
  ],
  theme: {
    colors: {
      'light': '#202020',
      'dark': '#202020',
      'dark-accent': '#2c2c2c',
      'grey': '9e9e9e',
      'grey-accent': '"484848',
      'green': '#1daa61',
    },
    extend: {},
  },
  plugins: [],
}

