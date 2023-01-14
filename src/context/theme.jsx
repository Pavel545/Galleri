import React,{useContext} from "react";

export const themes={
    light:{  
        background: "#FFFFFF",
        color: "#000000",

    },
    dark:{
        background: "#000000",
        color: "#FFFFFF",
    },
}
export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme:()=>{},

})
export const useThemeContext=()=>{
    const theme = useContext(ThemeContext);

    if(!theme)return theme.dark

    return theme;
}