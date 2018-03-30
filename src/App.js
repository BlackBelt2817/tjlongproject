import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Button } from 'react-bootstrap';


import Home from './Home.js';
import Projects from './Projects.js';
import About from './About.js';
import Resume from './Resume.js';
import Contact from './Contact.js';
import { LinkContainer } from 'react-router-bootstrap';

const TopRoutes = () => (
	<Router>
		<div>
			<div style={{borderBottomColor: 'white', borderBottomStyle: 'solid', backgroundColor: 'black', listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', paddingBottom: 10}}>
				<LinkContainer to="/"><button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Home</button></LinkContainer>
				<LinkContainer to="/projects"><button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Projects</button></LinkContainer>
				{/*<a target='_blank' href='https://www.linkedin.com/in/tyler-long-61205289/detail/treasury/summary/?entityUrn=urn%3Ali%3Afs_treasuryMedia%3A(ACoAABKxte4BpWBI7WTqgT1dhsBQw2J0NZs4uCU%2C1517420080081)'><Button style={{cursor: 'pointer', fontSize: 28, borderColor: 'black', color: 'white', background: '#5b0d0d', borderRadius: 10}}>Résumé</Button></a>*/}
                <LinkContainer to="/resume"><button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Résumé</button></LinkContainer>
                <button onClick={() => window.location.replace('/contact')} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Contact Me</button>

			</div>
			<Route exact path="/" component={Home} />
			<Route path="/projects" component={Projects} />
			<Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
		</div>
	</Router>
);

class App extends Component {

    render() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignContent: 'space-between'}}>
                <TopRoutes />
                <div>
                    <div style={{width: '100%', position: 'fixed', bottom: 0, display: 'flex', justifyContent: 'space-around', borderTopColor: 'white', borderTopStyle: 'dotted', paddingTop: 10, zIndex: 'initial'}}>
                        <a href="https://www.linkedin.com/in/tyler-long-61205289/">
                            <img style={{width: 60}} src={require('./icons/LinkedInInverted.png')} alt='LinkedIn' />
                        </a>
                        <a href="https://www.github.com/blackbelt2817">
                            <img style={{width: 60}} src={require('./icons/OctoCatInverted.png')} alt='GitHub' />
                        </a>
                        <a href="https://www.codewars.com/users/BlackBelt2817">
                            <img style={{width: 60}} src={require('./icons/Codewars.png')} alt='Codewars' />
                        </a>
                        <a href="https://www.codecademy.com/users/blackbelt2817/achievements">
                            <img style={{width: 60}} src={require('./icons/Codecademy.png')} alt='Codecademy' />
                        </a>
                        <a href="https://www.duolingo.com/tyjalo">
                            <img style={{width: 60}} src={require('./icons/duoLingoDark.jpg')} alt='duoLingo' />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;