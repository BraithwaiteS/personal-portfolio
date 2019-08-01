import React, { Component } from 'react';
import './style.css';

class Contact extends Component {
    render() {
        return (
            <div>
            <div className="contacts">
                
            <div className="flex-container-2">
                <div className="google"> <a href="https://gmail.com" className="g" className="fa fa-google"></a></div>
                <div className="google"> <a href="https://gmail.com" className="g" className="fa fa-linkedin"></a></div>
            </div>

            <div className="flex-container-2">
                <div className="google"> <a href="https://gmail.com" className="g" className="fa fa-github"></a></div>
                <div className="google"> <a href="https://gmail.com" className="g" className="fa fa-user"></a></div>
            </div>

           </div>
        </div>
        )
    }
}

export default Contact;
