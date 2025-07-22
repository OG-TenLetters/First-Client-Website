/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        // Ensure this block is correct
        spectral: ['var(--font-spectral)'],
      },
    },
  },
  plugins: [
        plugin(function({ addUtilities }) {
      addUtilities({
        '.mask-stencil': {
          'mask-image': 'url("/public/Badge.svg")',
          'mask-size': 'cover',
          'mask-repeat': 'no-repeat',
        }
      })
    })
  ],
};