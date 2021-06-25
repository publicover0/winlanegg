import React, { Component } from 'react';
import '../App.css';
import { Jumbotron } from 'react-bootstrap';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    
    

    render(props) {

        return (
            
                <Jumbotron>
                    <h1> Welcome to Winlane.GG! </h1>
                    <p> Your one-stop-shop for how to play your matchup. </p>
                    <p> To begin, select your champion from the list on the left!</p>
                </Jumbotron>
              
      );
    }
  }

export default Welcome