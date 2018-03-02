import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            message: '',
        };
        this.handleClick = this.handleClick.bind(this);
    }    

    // onSubmit={fetch('/hey')
    // .then(response => {
    //     console.log('fuck');
    // })}

    handleClick() {
        if (!this.state.firstName) {
            return alert('You must include your first name!');
        } else if (!this.state.lastName) {
            return alert('You must include your last name!');
        } else if (!this.state.message) {
            return alert('You must include a message!');
        } else {
            console.log(this.state.firstName);
        }
    }

    render () {
        return (
            <div>
                <h1 style={{textAlign:'center'}} >Contact Me</h1>
                <div style={{textAlign:'center'}}>
                    <FormGroup>
                        <FormControl style={{fontSize: 20, borderRadius: 4}} type="text" placeholder="First Name" value={this.state.firstName} onChange={e => this.setState({firstName: e.target.value})} /><br />
                        <FormControl style={{fontSize: 20, borderRadius: 4}} type="text" placeholder="Last Name" value={this.state.lastName} onChange={e => this.setState({lastName: e.target.value})} /><br />
                        <textarea onChange={e => {this.setState({message: e.target.value})}} style={{fontSize: 24, resize: 'none', borderRadius: 2}} cols="30" rows="5" placeholder="Enter Your Message here" type="text" name="message" id="message"/><br />
                        <a href={`mailto:tyler.longj@gmail.com?&subject=${'New email from ' + this.state.firstName + ' ' + this.state.lastName}&body=${this.state.message.split(' ').join('%20')}`}>
                            <Button type="submit"
                                style={{
                                    height: 40,
                                    width: 150,
                                    borderColor: 'black',
                                    borderStyle: 'double',
                                    borderRadius: 10,
                                    background: '#5b0d0d',
                                    fontSize: 16,
                                    color: 'white',
                                    cursor: 'pointer'
                                }}
                            >Submit</Button>
                        </a>
                    </FormGroup>
                </div>
            </div>
        );
    }
}

// server.listen(3000);

