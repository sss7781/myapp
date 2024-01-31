import './App.css';
import Textform from './components/textforms';
import Navbar from './components/navbar.js';


import { useState } from 'react';
import Alert from './components/alert.js';
import About from './components/about.js';


import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";



// import About from './components/about.js';
function App() {
  const [mode, setMode] = useState('dark');

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }

  }
    return (
<>
<Router>
<Navbar mode={mode}  toggleMode={toggleMode}/>
<Alert alert="This is ALERT"/>
<div className="container mb-3">
<Routes>
<Route exact path="/about.js" element={<About />}></Route>
<Route exact path="/" element={<Textform heading="Enter your heading here"/>}></Route>
 </Routes>
</div>
</Router>

</>
  );
}

export default App;
