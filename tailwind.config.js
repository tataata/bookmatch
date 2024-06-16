/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'stone': '#F7F4F3',
        'beige': '#DED2CE',
        'black': '#151515',
        'red': '#E13244',
        'blue': '#0081A7',
        'yellow': '#FFC107'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Lora', 'serif'],
      },
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  variants: {},
  plugins: [],
}

