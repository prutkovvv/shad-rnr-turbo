const sharedConfig = require("@config/ui/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset"), sharedConfig],
  darkMode: ["class"],
  theme: {
    extend: {},
  },
  plugins: [],
};
