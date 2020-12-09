import React from 'react';
import './styles/styles.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nightmode from './pages/Nightmode';
import MapFindFilter from './pages/MapFindFilter';
import IntersectionObserver from './pages/IntersectionObserver';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path ="/" exact component={Home}/>
          <Route path ="/Nightmode" component={Nightmode}/>
          <Route path ="/MapFindFilter" component={MapFindFilter}/>
          <Route path ="/IntersectionObserver" component={IntersectionObserver}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
