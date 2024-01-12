/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6800ff",

          secondary: "#c18600",

          accent: "#00c700",

          neutral: "#161616",

          "base-100": "#fefded",

          info: "#40c3ff",

          success: "#009d50",

          warning: "#ed7600",

          error: "#db002e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
