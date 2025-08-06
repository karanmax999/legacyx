/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'legacy-blue': '#0A2463',
        'legacy-gold': '#F7931A',
        'legacy-dark': '#050A30',
        'legacy-light': '#F5F7FA',
        'legacy-gray': '#6B7280',
      },
    },
  },
  plugins: [],
}