import React, { useState } from 'react';

import { BrowserRouter as Router } from "react-router-dom";

import './App.css';

function App() {
  
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  const dropdownItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <header className="App-header">
        
          <button type="button" onClick={() => setDropdownIsOpen(!dropdownIsOpen)}>Open Dropdown</button>
          
          {dropdownIsOpen && <div className="dropdown">
            {dropdownItems.map(item => <div key={item} className="dropdown-item">{item}</div>)}  
          </div>}  
        
        </header>
      </div>
    </Router>
  );
}

export default App;
