/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canopy: "#4A5D23",
        gold: "#D4AF37",
        linen: "#FDFBF7",
        stone: "#F4F1EA",
        soil: "#2C2A25",
      },
      fontFamily: {
        display: ['Gambarino', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      transitionTimingFunction: {
        cinematic: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      boxShadow: {
        bottle: '0 30px 60px -20px rgba(44, 42, 37, 0.35)',
      },
    },
  },
  plugins: [],
};
