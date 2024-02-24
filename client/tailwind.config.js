/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PollerOne: ["Poller One", "serif"],
        Inter: ["Inter", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        richgreen: {
          10: "#FAFFF7",
          50: "#8FCB73",
          100: "#5ECB46",
          200: "#619878",
          300: "#508D69",
          400: "#3C6255",
        },
      },
    },
  },
  plugins: [],
};
