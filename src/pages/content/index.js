import { ThemeContext, themes, useThemeContext } from "../../context/theme";
import { useState } from "react";
import { MainGallery } from "../main";
import GlobalStyles from "../../GlobalStyle/style";

function Content() {
  const [currentTheme, setCurrentTheme] = useState(themes.dark);

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light);
      return;
    }
    setCurrentTheme(themes.dark);
  };
  const { theme } = useThemeContext();

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
        <GlobalStyles style={{ background: theme.background }} />
        <MainGallery />
    </ThemeContext.Provider>
  );
}
export default Content;
