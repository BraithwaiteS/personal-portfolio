import React, { Component } from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div className="flex-container">
                    <div className="navigation">
                        <Link to ='/' style = {{textDecoration: 'none' ,color:"gray"}}>Home</Link>
                    </div>
                    <div className="navigation">
                    <Link to ='/skills' style = {{textDecoration: 'none' ,color:"gray"}}>Skills</Link>
                        </div>
                    <div className="navigation">
                    <Link to ='/portfolio' style = {{textDecoration: 'none' ,color:"gray"}}>Portfolio Pieces</Link>
                        </div>
                    <div className="navigation">
                    <Link to ='/contact' style = {{textDecoration: 'none' ,color:"gray"}}>Contact</Link>
                    </div>
            </div>
        )
    }
}
export default Navbar;
