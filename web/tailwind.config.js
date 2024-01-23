/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'about-banner': "url('/images/about-banner.png')",
      },
    },
  },
  plugins: [],
}
