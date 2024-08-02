/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'headerImage': "url('/img/header.webp')",
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      animation: {
        bounceRight: 'bounceRight 2s ease-in-out infinite',
      },
      keyframes: {
        bounceRight: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(7px)' },
          '100%': { transform: 'translateX(0)' },
        },
      }
    },
  },
  plugins: [],
}

