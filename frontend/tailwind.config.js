/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "plus-font": ["Plus Jakarta Sans", "sans-serif"],
        "alt-font": ["Bona Nova SC", "serif"],
      },
    },
  },
  plugins: [import("@tailwindcss/forms")],
};
