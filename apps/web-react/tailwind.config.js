const sharedConfig = require("@config/ui/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [sharedConfig],
  darkMode: ["class"],
  theme: {
    extend: {},
  },
  plugins: [],
};
