/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          primary: "#10b981",      // CATBEL green
          secondary: "#6366f1",    // indigo
          warning: "#f59e0b",
          danger: "#ef4444",
          muted: "#6b7280",
          bg: "#f5f7fb"
        },
        borderRadius: {
          xl: "1rem"
        },
        boxShadow: {
          card: "0 4px 12px rgba(0,0,0,0.06)"
        }
      }
    },
    plugins: []
  };
  