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
                        <a target="_blank" href='https://lambdashowcase.herokuapp.com/'><Button style={{ cursor: 'pointer', width: 300, height: 30, borderRadius: 10}}>Lambda Showcase (Capstone)</Button></a>
                        <p />

                        {/*<h3>Lambda School CS2:</h3>
                        <input type="submit" value="Personal Project" style={{width: 300, height: 30, borderRadius: 10}} />
                        <p />*/}

                        <a target="_blank" href='https://github.com/LambdaGuitar'><Button value="LambdaGuitar" style={{ cursor: 'pointer', width: 300, height: 30, borderRadius: 10}}>LambdaGuitar</Button></a>
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