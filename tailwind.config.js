/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#f8fafc",
        surface: "#ffffff",
        accent: "#6366f1",
        "accent-2": "#3b82f6",
        "accent-hover": "#818cf8",
        heading: "#1e293b",
        body: "#334155",
        muted: "#64748b",
        border: "#e2e8f0",
        "border-hover": "#cbd5e1",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
