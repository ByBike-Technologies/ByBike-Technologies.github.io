/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bybikeRed: '#E35959',
        bybikeBlack: '#0B0E13',
        bybikeBlue: '#00A29D',
        bbSurface: '#F5F7F7',
        bbMuted: '#6B7280',
        bbBorder: '#E5E7EB',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        azonix: ['Azonix', 'sans-serif'],
      },
      keyframes: {
        glow: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)' },
        },
        glowOdd: {
          '0%': { transform: 'scale(1.08)' },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
      animation: {
        glowUp: 'glow 4s ease-in-out infinite',
        glowUpOdd: 'glowOdd 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
