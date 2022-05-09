import React from 'react';

import './App.css';
import NavBar from './components/NavBar.jsx';
import './components/NavBar.css'
import './index.js';
import ItemListContainer from './components/ItemListContainer';
import './components/ItemCount.jsx';


function App() {
  return (
    <div className="App">
      
      <NavBar>
     
      </NavBar>
      
      
      <ItemListContainer/>
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;


