import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
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
						firstName: ''
        };
        this.handleClick = this.handleClick.bind(this);
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
						
						document.getElementById("inputform").reset();

						alertify.alert('Contact Form', `Thank you for your inquiry, ${name}. Your email has been sent!`);


        }
    }

    render () {
        return (
            <div>
                <h1 style={{textAlign:'center'}} >Contact Me</h1>
								<div style={{textAlign:'center'}}>
										<input style={{fontSize: 20, borderRadius: 4}} type="text" placeholder="Name:" value={this.state.name} onChange={e => this.setState({name: e.target.value})} /><br />
										<input style={{fontSize: 20, borderRadius: 4}} type="text" placeholder="Subject:" value={this.state.subject} onChange={e => this.setState({subject: e.target.value})} /><br />
										<input style={{fontSize: 20, borderRadius: 4}} type="text" placeholder="Email:" value={this.state.email} onChange={e => this.setState({email: e.target.value})} /><br />
										<textarea onChange={e => {this.setState({message: e.target.value})}} style={{fontSize: 24, borderRadius: 2}} cols="30" rows="5" placeholder="Enter Your Message here..." type="text" name="message" id="message"/><br />
										<Button type='submit' id="submitbutton" onClick={this.handleClick}>Submit</Button>
										<h3 style={{marginTop: 50, color: 'white'}}>{this.state.name !== '' ? null : <i>**Name required</i>}</h3>
										<h3 style={{color: 'white'}}>{this.state.email !== '' ? null : <i>**Email required</i>}</h3>
										<h3 style={{color: 'white'}}>{this.state.message !== '' ? null : <i>**Message required</i>}</h3>
                </div>
            </div>
        );
    }
}

