/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: 'Rubik, sans-serif',
        poppins: 'Popins, sans-serif',
      },
      screens: {
        '2md': '992px',
        xs: '580px',
        xxs: '480px',
      },
    },
  },
  plugins: [],
}
