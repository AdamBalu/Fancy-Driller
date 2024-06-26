import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: "class",
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
        height: "height",
        color: "color",
        bgColor: "background-color, color, border",
      },
      colors: {
        primary: "#2369e8",
        primaryDark: "#427de8",
        primaryCard: "#e7edfa",
        button: "#b6cfe8",
        primaryCardHovered: "#a3c0e3",
        primaryCardDark: "#02213a",
        secondary: "#061839",
        secondaryButton: "#061839",
        secondaryDark: "#c3c7d1",
        border: "#8bace8",
        borderDark: "#0859f1",
        correct: "#20a10e",
        incorrect: "#cc0e0e",
        onAnsweredButton: "#f0f0fb",
        correctCard: "#69ba5b",
        correctCardDark: "#114a08",
        incorrectCardDark: "#730909",
        incorrectCard: "#da5b5b",
        mainBackground: "#d5deec",
        mainBackgroundDark: "#030f1b",
        mainBackgroundGradient: "#041c35",
        selected: "#3879f4",
        selectedDark: "#3879f4",
        selectedCard: "#9cc0e4",
        sortBg: "#9cbee0",
        selectedCardDark: "#124fbd",
        orderButton: "#04467c",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
