import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          "light-white": "#f1f1f1",
          "golden-white": "#d3ffff",
          "light-black": "#010101",
          "text-blue": "rgb(51, 102, 255)",
          "light-blue": "rgba(51, 102, 255, 0.08)",
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
