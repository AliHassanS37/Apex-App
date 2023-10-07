import './App.css';
import React from 'react'
import About from './About';
import { AppBar } from './Layout';
import Name from './Name';


function App() {
  return (
    <AppBar>
      <About />
      <Name />
    </AppBar>
  );
}

export default App;
