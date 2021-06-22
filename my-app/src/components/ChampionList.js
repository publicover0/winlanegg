import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';

let champions = require('./champions.json');

class ChampionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedChampion: "Unselected",
            EnemyChampionList: this.props.EnemyChampionList,
            ChampionListToLoad: []
        }
    }

    handleClick = (name) => {
        this.setState(state => ({selectedChampion: name}))
        this.props.updateMethod(name)
    }

    

    render(props) {
/* this doesn't work. Need to look at MatchupInfo's method to do this - can probably make something work like that.
        if (this.props.EnemyChampionList.length != 0) {
            let TempChampionListToLoad = []
            let TempEnemyChampionList = this.state.EnemyChampionList
            champions.forEach(function(champion) {
                if (TempEnemyChampionList.includes(champion.name)){
                    TempChampionListToLoad.push(champion)
                }
            })
            this.setState(state => ({ChampionListToLoad: TempChampionListToLoad}))
        } else {
            this.state.ChampionListToLoad = champions
        }
*/
        return (
            
            <div class="grid-container">
                
                {this.state.ChampionListToLoad.map((champion, index) => (
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