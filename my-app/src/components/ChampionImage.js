import React from 'react';

const ChampionImage = function statelessFunctionComponentClass(props) {

    let source = props.imageIsRelative ? process.env.PUBLIC_URL + 'resources/champion/' + props.name : process.env.PUBLIC_URL + '/resources/champion/img/' + props.name ;

    return (
        <a href="/" class="champion-image-link">
            <img src={source} class="champion-image-link" />
        </a>
    )

        // app.js -> needs to record state of MyChampion and EnemyChampion
        // set onclick functions for ChampionList to update app.js's state values based on which ChampionList was clicked
        // set MatchupInfo.js's props to be equal to the state of App.js
        // set MatchupInfo.js's props to become its state and thus rerender on click

}

export default ChampionImage;