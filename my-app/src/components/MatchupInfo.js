import React, { Component } from 'react';
import { Accordion, Card, Button, Jumbotron } from 'react-bootstrap';
import '../App.css';

let matchups = require("./Camille.json");

class MatchupInfo extends React.Component {
    render(props) {
        
        let i = 0;
        let arr = [];
        let matchup = matchups[this.props.EnemyChampion];

        Object.keys(matchup).forEach(function(key) {
            arr.push([key,matchup[key]]);
        })
        

        return (
            <>
                <Jumbotron>
                    <h1>{this.props.MyChampion} vs {this.props.EnemyChampion}</h1>
                    <p> Click on one of the headers below to view information pertaining to this matchup. </p>
                </Jumbotron>

                <Accordion defaultActiveKey="0">
                    {arr.map((data, key) => {
                        return (
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey={i}>{data[0]}</Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={i++}>
                                    <Card.Body>{data[1]}</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        )
                    })}
                </Accordion>
        </>
      );
    }
  }

export default MatchupInfo