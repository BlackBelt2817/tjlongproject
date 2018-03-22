import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
const emailjs = require('emailjs-com');

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            message: '',
            email: '',
            subject: ''
        };
        this.handleClick = this.handleClick.bind(this);
    }    

    handleClick() {
        if (this.state.name === ''){
            return alert('You must include your name!');
        } else if (this.state.message === '') {
            return alert('You must include a message!');
        } else if (this.state.email === '') {
            return alert('You must include a message!');
        } else {
            console.log(this.state);
            let name = this.state.name;
            let email = this.state.email;
            let message = this.state.message;
            let subject = this.state.subject;
            emailjs.send(
                "gmail",
                "gmail_template",
                {
                    to_name: "Tyler",
                    from_name: name,
                    from_email: email,
                    from_message: message,
                    from_subject: subject
                },
                "user_YvKjNICDfNLcPPp4CEM0J"
            );
        }
    }

    //emailjs.send(serviceID, templateID, templateParams, userID);


        //emailjs.send("gmail","email_template_example",{name: "James", notes: "Check this out!"},"user_YvKjNICDfNLcPPp4CEM0J");


    render () {
        return (
            <div>
                <h1 style={{textAlign:'center'}} >Contact Me</h1>
                <div style={{textAlign:'center'}}>
                    <input style={{fontSize: 20, borderRadius: 4}} type="text" placeholder="Name:" value={this.state.name} onChange={e => this.setState({name: e.target.value})} /><br />
                    <input style={{fontSize: 20, borderRadius: 4}} type="text" placeholder="Subject:" value={this.state.subject} onChange={e => this.setState({subject: e.target.value})} /><br />
                    <input style={{fontSize: 20, borderRadius: 4}} type="text" placeholder="Email:" value={this.state.email} onChange={e => this.setState({email: e.target.value})} /><br />
                    <textarea onChange={e => {this.setState({message: e.target.value})}} style={{fontSize: 24, borderRadius: 2}} cols="30" rows="5" placeholder="Enter Your Message here..." type="text" name="message" id="message"/><br />
                    <Button id="submitbutton" onClick={this.handleClick}>Submit</Button>
                    <h3 style={{marginTop: 50, color: 'white'}}>{this.state.name !== '' ? null : <i>**Name required</i>}</h3>
                    <h3 style={{color: 'white'}}>{this.state.email !== '' ? null : <i>**Email required</i>}</h3>
                    <h3 style={{color: 'white'}}>{this.state.message !== '' ? null : <i>**Message required</i>}</h3>
                    <div className="g-recaptcha" data-sitekey="6LeSIE4UAAAAAEfKH9IngU-nX9WMrqy570tC0Zez"></div>

                </div>
            </div>
        );
    }
}

