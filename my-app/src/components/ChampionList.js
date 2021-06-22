import React, { Component } from 'react';
import ChampionImage from './ChampionImage';
import Champion from './Champion';
import '../App.css';

let champions = require('./champions.json');

class ChampionList extends React.Component {
    render(props) {

        return (
            
            <div class="grid-container">
                
                {champions.map((champion, index) => (
        
                
        
                <div key={index} class={index + 1}>
                    <Champion name={champion.name} champId={champion.champId} imageName={champion.imageName} />  
                </div>
                ))}
            </div>
              
      );
    }
  }

export default ChampionList