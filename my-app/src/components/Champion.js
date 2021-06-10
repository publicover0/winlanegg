import React, { Component } from 'react';
import ChampionImage from './ChampionImage';

class Champion extends React.Component {
    render(props) {

      return <>{this.props.name}, {this.props.champId} <ChampionImage name={this.props.name + '.png'} imageIsRelative='true' /></>;
    }
  }

export default Champion