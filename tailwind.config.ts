import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          bg: "#d9e3f2",
          text: "#00071f",
        },
        dark: {
          "logo-primary": "#1D68FF",
          "primary-text": "#EAF3FF",
          "secondary-text": "#83AADF",
          "custom-dark-blue": "#050E1B",
          "custom-blue": "#0D1827",
          "custom-blue-stroke": "#122237",
          "button-blue": "#1E375A",
          "text-hover": "#122033",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
