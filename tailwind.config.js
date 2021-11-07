module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        projects: "repeat(auto-fit, minmax(300px, 1fr))",
      },
    },
  },
  variants: {
    extend: {
      transform: ["hover", "focus"],
      scale: ["hover", "focus"],
      zIndex: ["hover", "active"],
    },
  },
  plugins: [],
};
