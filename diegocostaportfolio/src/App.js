import React from 'react';
import './App.css';
import Home from './components/Home';
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from './components/Resume';
import { Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <CssBaseline>
      <Route exact path="/" component= {Home} />
      <Route path="/resume" component= {Resume} />
      <Route path="/portfolio" component= {Portfolio} />
      <Route path="/contact" component= {Contact} />
    </CssBaseline>
  );
}

export default App;
