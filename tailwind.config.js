/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Charcoal metal body
        metal: {
          900: "#0d0d0f",
          800: "#141417",
          700: "#1c1c20",
          600: "#26262b",
          500: "#33333a",
        },
        // Amber/copper glow (from your inspiration renders)
        amber: {
          DEFAULT: "#e8a24a",
          bright: "#ffc57a",
          deep: "#b06d23",
        },
        speaker1: "#e8a24a",
        speaker2: "#4ac2e8",
      },
      fontFamily: {
        // Tech/industrial display + clean body
        display: ["'Rajdhani'", "system-ui", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        // Recessed metal socket
        socket:
          "inset 0 2px 4px rgba(0,0,0,0.8), inset 0 -1px 1px rgba(255,255,255,0.04)",
        // Raised plastic key
        plastic:
          "0 2px 3px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.15), inset 0 -2px 4px rgba(0,0,0,0.4)",
        glow: "0 0 12px rgba(232,162,74,0.55), 0 0 2px rgba(255,197,122,0.9)",
      },
    },
  },
  plugins: [],
};
