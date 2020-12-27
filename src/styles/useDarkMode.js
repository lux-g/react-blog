import React, { useState, useEffect } from "react";

const useDarkMode = () => {
    const [theme, setTheme] = useState('light');

    //SET LOCAL STORAGE
    const setMode = (mode)=> {
        localStorage.setItem('theme', mode)
        setTheme(mode)
    }

    //GET FROM LOCAL STORAGE
    useEffect(()=> {
        const localTheme = localStorage.getItem('theme')
        console.log(localTheme)
        localTheme ? setTheme(localTheme) : setMode('light')
    }, [])

    const toggleTheme = ()=> {
        theme === 'dark' ? setMode('light') : setMode('dark');
    }
    
    return[theme, toggleTheme]
}

export default useDarkMode;