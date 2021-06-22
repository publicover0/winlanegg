import React, { Component } from 'react';
import ChampionImage from './ChampionImage';

class Champion extends React.Component {
    render(props) {

      return <><ChampionImage name={this.props.imageName} imageIsRelative='true' /></>;
    }
  }

export default Champion