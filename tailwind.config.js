/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#34d399',
        accent: '#10b981',
      },
      boxShadow: {
        glow: '0 0 24px rgba(52, 211, 153, 0.4)',
        glowSm: '0 0 12px rgba(52, 211, 153, 0.35)',
        glowLg: '0 0 48px rgba(16, 185, 129, 0.22)',
        'glow-lg': '0 0 56px rgba(52, 211, 153, 0.45)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
