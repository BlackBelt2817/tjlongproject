import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
// import { BrowserRouter as Router,
// 	Route,
// 	Link
// } from 'react-router-dom';



export default class Projects extends Component {
    render () {
        return (
            <div>
                <h2 style={{display: 'flex', justifyContent: 'center'}}>Projects</h2>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <form style={{
                        width: 250,
                        display: 'flex',
                        flexDirection: 'column',
                    }}>

                        <div class="mdl-list">
                            <div class="mdl-list__item">
                                <span class="mdl-list__item-primary-content">
                                    <span className='project-list'>Lambda Showcase</span>
                                </span>
                                <a class="mdl-list__item-secondary-action" target="_blank" rel="noopener noreferrer" href='https://lambdashowcase.herokuapp.com/'><i class="material-icons">code</i></a>
                            </div>
                            <div class="mdl-list__item">
                                <span class="mdl-list__item-primary-content">
                                    <span className='project-list'>Lager Logger</span>
                                </span>
                                <a class="mdl-list__item-secondary-action" target="_blank" rel="noopener noreferrer" href='https://lagerlogger.herokuapp.com/'><i class="material-icons">code</i></a>
                            </div>
                            <div class="mdl-list__item">
                                <span class="mdl-list__item-primary-content">
                                    <span className='project-list'>LambdaGuitar</span>
                                </span>
                                <span class="mdl-list__item-secondary-content">
                                    <a class="mdl-list__item-secondary-action" target="_blank" rel="noopener noreferrer" href='https://github.com/LambdaGuitar'><i class="material-icons">code</i></a>
                                </span>
                            </div>
                            <div class="mdl-list__item">
                                <span class="mdl-list__item-primary-content">
                                    <span className='project-list'>Rural Reference</span>
                                </span>
                                <span class="mdl-list__item-secondary-content">
                                    <a class="mdl-list__item-secondary-action" target="_blank" rel="noopener noreferrer" href='https://ruralreference.herokuapp.com/'><i class="material-icons">code</i></a>
                                </span>
                            </div>
                            <div class="mdl-list__item">
                                <span class="mdl-list__item-primary-content">
                                    <span className='project-list'>Simpsons Quotes</span>
                                </span>
                                <span class="mdl-list__item-secondary-content">
                                    <a class="mdl-list__item-secondary-action" target="_blank" rel="noopener noreferrer" href='https://simpsonsquotes.herokuapp.com/'><i class="material-icons">code</i></a>
                                </span>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
            
        );
    }
}

