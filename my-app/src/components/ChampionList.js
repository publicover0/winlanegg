import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';

let champions = require('./champions.json');

class ChampionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedChampion: "Aatrox"
        }
    }

    handleClick = (name) => {
        this.setState(state => ({selectedChampion: name}))
        this.props.updateMethod(name)
    }

    

    render(props) {

        return (
            
            <div class="grid-container">
                
                {champions.map((champion, index) => (
                    <div key={index} class={index + 1}>
                        
                        <ChampionImage imageName={champion.imageName} onClick={this.handleClick} name={champion.name} />
                        
                    </div>
                ))}
            </div>
              
      );
    }
  }

  const ChampionImage = ({ onClick, imageName, name}) => (
      <img src={'resources/champion/'+imageName} onClick={onClick.bind(this, name)} class="champion-image-link"/>
  )

export default ChampionList