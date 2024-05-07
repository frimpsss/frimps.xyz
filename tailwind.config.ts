import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        '50': '#f1f2ff',
        '100': '#e5e5ff',
        '200': '#ced0ff',
        '300': '#a7a7ff',
        '400': '#7c76ff',
        '500': '#523fff',
        '600': '#3c18ff',
        '700': '#2c07fa',
        '800': '#2405d2',
        '900': '#1f06ac',
        '950': '#0a0057',
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
