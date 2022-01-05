import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';

let champions = require('./champions.json');

class ChampionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedChampion: null,
            championFilterText: ''
        }

        this.handleChampionFilterTextChange = this.handleChampionFilterTextChange.bind(this);
    }

    handleChampionFilterTextChange(event) {
        console.log(this.state.championFilterText);
        this.setState({championFilterText: event.target.value});
        console.log(this.state.championFilterText);
    }

    handleClick = (name) => {
        this.setState(state => ({selectedChampion: name}))
        this.props.updateMethod(name)
    }

    render(props) {


        return (

            <div class="champion-pane-left">
                <nav class="navbar navbar-light bg-light">
                    <span class="navbar-brand"> Choose your champion: <b>{this.state.selectedChampion}</b></span>
                    <input class="form-control me-2" type="text" placeholder="Search" aria-label="Search" value={this.state.championFilterText} onChange={this.handleChampionFilterTextChange} />
                </nav>
                <div class="champion-pane-left-list">
                    <div class="grid-container">
                
                        {champions.filter(champion => champion.name.toUpperCase().includes(this.state.championFilterText.toUpperCase()))
                            .map((champion, index) => (
                            <div key={index} class={index + 1}>
                                
                                <ChampionImage imageName={champion.imageName} onClick={this.handleClick} name={champion.name} />
                                
                            </div>
                        ))}

                    </div>
                </div>
            </div>  
      );
    }
  }

  const ChampionImage = ({ onClick, imageName, name}) => (
      <img src={'resources/champion/'+imageName} onClick={onClick.bind(this, name)} class="champion-image-link"/>
  )

export default ChampionList