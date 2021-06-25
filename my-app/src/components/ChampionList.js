import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';

let champions = require('./champions.json');
let championlist = []
let renderlist = []

class ChampionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedChampion: "Unselected",
            EnemyChampionList: this.props.EnemyChampionList,
            sortValue: '',
            inputValue: '',
            championlist: []
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

        /*
        const filteredChampions = this.state.championlist.filter(champion => {
            return champion.name.toLowerCase().includes(this.state.inputValue.toLowerCase())
        })
*/
        return (
            
                <div class="champion-pane-left">
                    <nav class="navbar navbar-light bg-light">
                        <span class="navbar-brand"> {this.props.headerText}</span>
                        <form>
                            <input class="form-control me-2" placeholder="Search" type="text" value={this.state.inputValue} onChange={this.filterChampionListA} />
                        </form>
                    </nav>
                    <div class="champion-pane-left-list">
                        <div class="grid-container">
                            {championlist.map((champion, index) => (
                                <div key={index} class={index + 1}>
                                    <ChampionImage imageName={champion.imageName} onClick={this.handleClick} name={champion.name} />        
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
              
      );
    }
    filterChampionListA = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }
  }

  const ChampionImage = ({ onClick, imageName, name}) => (
      
        <img src={'resources/champion/'+imageName} onClick={onClick.bind(this, name)} class="champion-image-link" alt={name}/>
      
  )

export default ChampionList