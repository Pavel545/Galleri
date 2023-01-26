import React, { useContext } from "react";

export const themes = {
  light: {
    background: "#FFFFFF",
    color: "#000000",
    hover: "#EDEDED",
    border: "rgba(0, 0, 0, 0.3)",
    button: "rgba(0, 0, 0, 0.3)",
  },
  dark: {
    background: "#000000",
    color: "#FFFFFF",
    hover: "#464646",
    border: "#FFFFFF",
    button: "rgba(255, 255, 255, 0.3)",
  },
};
export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});
export const useThemeContext = () => {
  const theme = useContext(ThemeContext);

  if (!theme) return theme.dark;

  return theme;
};
