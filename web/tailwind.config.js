/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      screens: {
        1350: '1350px',
      },
      backgroundImage: {
        'about-banner': "url('/images/about-banner.png')",
      },
    },
  },
  plugins: [],
}
