/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkMode: false,
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontFamily: {
      title: ["Red Hat Display"],
    },
    backgroundImage: {
      "radial-gradient": "radial-gradient(circle, #ECDFCC, #697565, #1E201E)",
    },
    screens: {
      xs: { min: "320px", max: "489px" },
      sm: { min: "490px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "1280px", max: "1535px" },
      "2xl": { min: "1536px", max: "1919px" },
      "3xl": "1920px",
      "4xl": "2560px",
    },
  },
  plugins: [require("daisyui")],
};
