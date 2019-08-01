import React, { Component } from 'react'
import portfolioList from './portfolioList.json';
import PortfolioCard from './PortfolioCard';
import './style.css';

class Portfolio extends Component {
    state = {
        portfolios: portfolioList,
    };

    render() {
        return (
            <div>
                {this.state.portfolios.map(myProject =>(
                    <PortfolioCard
                    key = {myProject.id}
                    id={myProject.id}
                    name={myProject.name}
                    deploy={myProject.deploy}
                    github={myProject.github}
                    description={myProject.description}
                    img={myProject.img}
                    />
                ))}
            </div>
        )
    }
}

export default Portfolio;
