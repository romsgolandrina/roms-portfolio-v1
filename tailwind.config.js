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
      xs: "320px", // Small smartphones (portrait)
      sm: "480px", // Smartphones
      md: "768px", // Tablets (portrait)
      lg: "1024px", // Tablets (landscape) / Small laptops
      xl: { min: "1280px", max: "1535px" }, // Laptops only
      "2xl": { min: "1536px", max: "1919px" }, // Large laptops
      "3xl": "1920px", // Full HD monitors
      "4xl": "2560px", // 2K monitors
    },
  },
  plugins: [require("daisyui")],
};
