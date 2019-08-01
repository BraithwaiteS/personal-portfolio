import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      
   <Header/>
   <Navbar/>
      <Route exact path = '/' component ={Home}/>
      <Route exact path = '/about' component ={Skills}/>
      <Route exact path = '/portfolio' component ={Portfolio}/>
      <Route exact path = '/contact' component ={Contact}/>

      
    </div>
    </Router>
  );
}

export default App;
