import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nightmode from './pages/Nightmode';
import MapFindFilter from './pages/MapFindFilter';
import IntersectionObserver from './pages/IntersectionObserver';
import useDarkMode from "./styles/useDarkMode";
import Toggle from './components/Toggle';
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "./styles/globalStyles";


function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
      <Router>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles/>
          <Toggle theme={theme} toggleTheme={toggleTheme}/>
            <Switch>
              <Route path ="/" exact component={Home}/>
              <Route path ="/Nightmode" component={Nightmode}/>
              <Route path ="/MapFindFilter" component={MapFindFilter}/>
              <Route path ="/IntersectionObserver" component={IntersectionObserver}/>
            </Switch>
        </ThemeProvider>
      </Router>
  );
}

export default App;
