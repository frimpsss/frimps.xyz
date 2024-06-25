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
        "50": "#f1f2ff",
        "100": "#e5e5ff",
        "200": "#ced0ff",
        "300": "#a7a7ff",
        "400": "#7c76ff",
        "500": "#523fff",
        "600": "#3c18ff",
        "700": "#2c07fa",
        "800": "#2405d2",
        "900": "#1f06ac",
        "950": "#0a0057",
      },
      gray: {
        "50": "#f7f7f7",
        "100": "#f0f0f0",
        "200": "#e3e3e3",
        "300": "#d1d1d1",
        "400": "#c2c2c2",
        "500": "#aaaaaa",
        "600": "#969696",
        "700": "#818181",
        "800": "#6a6a6a",
        "900": "#585858",
        "950": "#333333",
      },
      blue: {
        "50": "#e8f3ff",
        "100": "#d5e9ff",
        "200": "#b3d5ff",
        "300": "#85b7ff",
        "400": "#568aff",
        "500": "#2f5dff",
        "600": "#0c2bff",
        "700": "#001eff",
        "800": "#0620cd",
        "900": "#10279f",
        "950": "#0a155c",
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
