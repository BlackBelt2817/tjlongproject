import React, { Component } from 'react';
// import { ButtonGroup } from 'react-bootstrap';

export default class Home extends Component {

    render () {
        return (
            <div style={{display: 'flex', flexDirection: 'column', backgroundColor:'black', color:'white'}}>
                <div>
                    <h1 style={{display: 'flex', justifyContent: 'center'}}>
                        Software Developer
                    </h1>
                </div>
            </div>
        );
    }
}