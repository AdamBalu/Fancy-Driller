import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#124fbd",
        primaryCard: "#02213a",
        secondary: "#fdfffc",
        border: "#0859f1",
        correct: "#20a10e",
        incorrect: "#cc0e0e",
        correctCard: "#0d3906",
        incorrectCard: "#5c0808",
        mainBackground: "#01060b",
        mainBackgroundGradient: "#041c35",
        selected: "#3879f4",
        selectedCard: "#124fbd",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
