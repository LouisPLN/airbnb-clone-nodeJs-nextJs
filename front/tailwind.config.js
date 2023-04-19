/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  plugins: [require("daisyui"), require("flowbite/plugin")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#c026d3",
            secondary: "#f0abfc",
            accent: "#701a75",
            neutral: "#111827",
            "base-100": "#FFFFFF",
            info: "#1d4ed8",
            success: "#84cc16",
            warning: "#f87171",
            error: "#b91c1c",
          },
        },
      ],
    },
  },
};
