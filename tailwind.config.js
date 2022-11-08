/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--text-color)",
        },
      },

      backgroundColor: {
        skin: {
          fill: "var(--fill-color)",
          indicator: "var(--fill-color-indicator)",
        },
      },

      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
      },
    },
  },
  plugins: [],
};

// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {

//       colors: {
//         "dark-purple": "#081A51",
//         "light-white": "rgba(255,255,255,0.17)",
//       },
//     },
//   },
//   plugins: [],
// };
