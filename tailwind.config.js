/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#11aa91",

          secondary: "#dd8577",

          accent: "#89ff89",

          neutral: "#1D1622",

          "base-100": "#FAFAFA",

          info: "#92B0F6",

          success: "#115545",

          warning: "#F7C36E",

          error: "#ED648B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
