import React from 'react';

const ChampionImage = function statelessFunctionComponentClass(props) {

    let source = props.imageIsRelative ? process.env.PUBLIC_URL + 'resources/champion/' + props.name : process.env.PUBLIC_URL + '/resources/champion/img/' + props.name ;
    return (
        <img src={source} />
    )
}

export default ChampionImage;