import React, { Component } from 'react';
import { Accordion, Card, Button, Jumbotron } from 'react-bootstrap';
import '../App.css';

let matchups = require("./Camille.json");

class MatchupInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            MyChampion: props.MyChampion,
            EnemyChampion: props.EnemyChampion
        }
    }

    render(props) {
        
        let eventKeyCounter = 0;
        let matchupDataHeader = [];
        let matchup = matchups[this.props.EnemyChampion];

        Object.keys(matchup).forEach(function(key) {
            matchupDataHeader.push([key,matchup[key]]);
        })
        

        return (
            <>
                <Jumbotron>
                    <h1>{this.props.MyChampion} vs {this.props.EnemyChampion}</h1>
                    <p> Click on one of the headers below to view information about this matchup. </p>
                </Jumbotron>

                <Accordion defaultActiveKey="0">
                    {matchupDataHeader.map((data, key) => {
                        return (
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey={key}>{data[0]}</Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={eventKeyCounter++}>
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