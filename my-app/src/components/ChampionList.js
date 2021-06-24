import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';

let champions = require('./champions.json');
let championlist = []

class ChampionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedChampion: "Unselected",
            EnemyChampionList: this.props.EnemyChampionList
        }
    }

    handleClick = (name) => {
        this.setState(state => ({selectedChampion: name}))
        this.props.updateMethod(name)
    }

    

    render(props) {

        championlist = []


        if (this.props.EnemyChampionList.length === 0) {
            championlist = champions
        } else {
            for (var i = 0, n = this.props.EnemyChampionList.length; i < n; i++) {
                championlist.push(champions[this.props.EnemyChampionList[i]])
            }
        }


        console.log("championlist: ", championlist)

        
        return (
            
            <div class="grid-container">
                
                {championlist.map((champion, index) => (
                    <div key={index} class={index + 1}>
                        <ChampionImage imageName={champion.imageName} onClick={this.handleClick} name={champion.name} />        
                    </div>
                ))}
            </div>
              
      );
    }
  }

  const ChampionImage = ({ onClick, imageName, name}) => (
      
        <img src={'resources/champion/'+imageName} onClick={onClick.bind(this, name)} class="champion-image-link" alt={name}/>
      
  )


export default ChampionList