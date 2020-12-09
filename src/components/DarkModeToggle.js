import React, { useState, useEffect } from 'react';
import '../theme/dark-theme.css';
import '../theme/light-theme.css';
import '../styles/styles.scss';


const DarkModeToggle = () => {

  const [checked, setChecked] = useState(localStorage.getItem("theme") === "dark" ? true : false);
  
  useEffect(() => {
    document
    .getElementsByTagName("HTML")[0]
    .setAttribute("data-theme", localStorage.getItem("theme"));
  },[]);

  const toggleThemeChange = () => {;
    if (checked === false) {
      localStorage.setItem("theme", "dark");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      setChecked(true);
    } else {
      localStorage.setItem("theme", "light");
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", localStorage.getItem("theme"));
      setChecked(false);
    }
  }

  return(
    <label className="switch">
      <input
        type="checkbox"
        defaultChecked={checked}
        onChange={() => toggleThemeChange()}
      />
      <span className="slider round" />
    </label>
  )
}

export default DarkModeToggle;