import React, { createContext } from 'react';
import { useContext } from 'react';


const Theme = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
      },
      dark: {
        foreground: "#ffffff",
        background: "#222222"
      }
}


const ThemeContext = createContext(Theme.light)
const Themes = () => {
    return (
        <div>
            <ThemeContext.Provider value={Theme.dark}>
                 <Toolbar/>
            </ThemeContext.Provider>
        </div>
    );
}


function Toolbar (props) {
  return <ThemeButton />
}

const ThemeButton = () => {
    const theme = useContext(ThemeContext) ;
    return(
        
            <button style={{ background : theme.background , foreground : theme.foreground }} >Click To change Theme</button>
        
    )
}

export default Themes;
