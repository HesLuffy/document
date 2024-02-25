/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        black1: "#323232",
        black2: "#373737",
        white1: "#f7f7f7",
        grey1: "#eee",
        grey2: "#adadad",
        blue1: "#515d6d",
      },
      fontFamily: {
        blogFont: ["DM Sans", "Noto Sans Simplified Chinese"],
      },
      screens: {
        // min-width
        tablet: "640px",
        laptop: "1194px",
        desktop: "1280px",
      },
    },
  },
  plugins: [],
};
