import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#9E1899",
        border: "#FF00F5",
        correct: "#20a10e",
        incorrect: "#cc0e0e",
        correctCard: "#0d3906",
        incorrectCard: "#5c0808",
        secondary: "#161017",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
