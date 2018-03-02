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
                <h1 style={{display: 'flex', justifyContent: 'center'}}>Projects</h1>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <form style={{
                        width: 250,
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <center><small style={{color: 'red'}}>Lambda School Capstone:</small></center>
                        <a target="_blank" href='https://lambdashowcase.herokuapp.com/'><Button style={{ cursor: 'pointer', width: 300, height: 30, borderRadius: 10}}>Lambda Showcase</Button></a>
                        <p />
                        <center><small style={{color: 'red'}}>Lambda School Hackathon:</small></center>
                        <a target="_blank" href='https://github.com/LambdaGuitar'><Button style={{ cursor: 'pointer', width: 300, height: 30, borderRadius: 10}}>LambdaGuitar</Button></a>
                        <p />
                        <center><small style={{color: 'red'}}>Simple App utilizing Urban Dictionary API:</small></center>
                        <a target="_blank" href='https://ruralreference.herokuapp.com/'><Button style={{ cursor: 'pointer', width: 300, height: 30, borderRadius: 10}}>Rural Reference</Button></a>
                        <p />
                    </form>
                </div>
            </div>
            
        );
    }
}

/*

    <form action="/create" method="post">
        Name: <input type="text" name="name"><br>
        Content:<br><textarea name="content" cols="80" rows="10"></textarea><br>
        <input type="submit" value="Submit">
    </form>

*/