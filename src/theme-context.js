import React from "react"

export const themes = {
    light: {
        background:'#fff',
        color: '#000'
    },
    dark : {
        background:'#000',
        color: '#fff'
    }
}


export const ThemeContext = React.createContext(
    themes.dark // default theme
)