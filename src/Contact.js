import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
require('dotenv').config();
const emailjs = require('emailjs-com');
const alertify = require('alertifyjs');


export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            message: '',
            email: '',
            subject: '',
            firstName: '',
            validEmail: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleRedirect() {
        window.location = '/contact';
    }

    handleClick() {
        if (this.state.name === ''){
            return alertify.error("You must include your name!");
        } else if (this.state.email === '') {
            return alertify.error('You must include your email!');
        } else if (this.state.message === '') {
            return alertify.error('You must include a message!');
        } else {
            let name = this.state.name;
            name = name.split(' ');
            name = name[0];
            name = name.split('');
            name[0] = name[0].toUpperCase();
            if (name.length > 1) {
                for (let i = 1; i < name.length; i++) {
                    name[i] = name[i].toLowerCase();
                }
            }
            name = name.join('');
            alertify.alert();
            emailjs.send(
                "gmail",
                "gmail_to_me",
                {
                    to_name: "Tyler",
                    from_name: this.state.name,
                    from_email: this.state.email,
                    from_message: this.state.message,
                    from_subject: this.state.subject
                },
                "user_YvKjNICDfNLcPPp4CEM0J"
						);

                        alertify.alert('Contact Form', `Thank you for your inquiry, ${name}. Your email has been sent!`, () => {
                            console.log('Thanks for visiting! :)');
                            window.location.replace('/contact');
                        });
                        
        }
    }

    render () {
        return (
            <div>
                <h2 style={{textAlign:'center'}} >Contact Me</h2>
                <div style={{textAlign: 'center'}}>
                    <div className="mdl-textfield mdl-js-textfield">
                        <input style={{background: 'white', color: 'black'}} className="mdl-textfield__input" type="text" id="name" value={this.state.name} onChange={e => this.setState({name: e.target.value})} />
                        <label class="mdl-textfield__label" for="name">Name...</label>
                    </div><br />
                    <div className="mdl-textfield mdl-js-textfield">
                        <input style={{background: 'white', color: 'black'}} className="mdl-textfield__input" type="text" id="subject" value={this.state.subject} onChange={e => this.setState({subject: e.target.value})} />
                        <label class="mdl-textfield__label" for="subject">Subject...</label>
                    </div><br />
                    <div className="mdl-textfield mdl-js-textfield">
                        <input style={{background: 'white', color: 'black'}} className="mdl-textfield__input" type="text" id="email" value={this.state.email}
                        onChange={
                            e => this.setState({email: e.target.value}, () => {
                                let emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.exec(this.state.email);
                                if (emailRegEx !== null) {
                                    this.setState({ validEmail: true});
                                } else {
                                    this.setState({ validEmail: false });
                                }
                            })
                        } />
                        <label class="mdl-textfield__label" for="email">Email...</label>
                    </div><br />
                    <div class="mdl-textfield mdl-js-textfield">
                        <textarea onChange={e => {this.setState({message: e.target.value})}} style={{background: 'white', color: 'black'}} class="mdl-textfield__input" type="text" rows="3" maxrows="10" id="message"></textarea>
                        <label class="mdl-textfield__label" for="message">Message...</label>
                    </div><br />
                    <button id="newbutton" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" type='submit' onClick={this.handleClick}>Submit</button>
                    <h5 style={{marginTop: 50, color: 'white'}}>{this.state.name !== '' ? null : <i>**Name required</i>}</h5>
                    <h5 style={{color: 'white'}}>{(this.state.email !== '' && this.state.validEmail === true) ? null : <i>**Valid email required</i>}</h5>
                    <h5 style={{color: 'white'}}>{this.state.message !== '' ? null : <i>**Message required</i>}</h5>
                    
                        
                    
                </div>
            </div>
        );
    }
}

