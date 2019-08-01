import React, { Component } from 'react';
const PortfolioCard = props => (

    <div>
        <div className="image">
            <img alt="true" src={props.img}/>
        </div>
 

    <div className="box-description">
    <div className="box-description-box">
        <h4>{props.name}</h4>
        
        <ul>
            <li>{props.description}</li>
            <li>{props.tools}</li>
            <li><a href= {props.github}> Link to GitHub Code</a></li>
            <li><a href = {props.deploy}>Link to Deployed App</a></li>
        </ul>
    </div>
    </div>
    
    </div>

)

export default PortfolioCard;
