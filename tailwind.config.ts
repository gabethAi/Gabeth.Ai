import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        subtle: "##DDDDDD",
      },
      backgroundColor: {
        primary: "#0A0A0A",
      },
      backgroundImage: {
        "ask-questions": "url('./assets/images/askQuestion-bg.svg')",
        "register-right-illustration":
          "url('./assets/images/register-page-right-illustration.png')",
        "login-right-illustration":
          "url('./assets/images/login-page-right-illustration.png')",
        testimonial: "url('./assets/images/testimonial-bg.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
