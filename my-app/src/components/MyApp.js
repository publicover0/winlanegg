import React, { Component } from "react";
import ChampionList from "./ChampionList";
import MatchupInfo from "./MatchupInfo";
import SelectChampions from "./SelectChampions";

class MyApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            MyChampion: null,
            EnemyChampion: null
        };

    }

    handleClick = () => {
        const childelement = this.leftChampionList.current;
    }

    render() {
        return(
            <div class="all">

                <table>
                    <tbody> 
                        <tr>
                            <td>
                                <ChampionList updateMethod={this.LeftUpdate.bind(this)} />
                            </td>

                            <td>
                                <div class="matchup-info">
                                    { (this.state.MyChampion != null && this.state.EnemyChampion != null )
                                    ? <MatchupInfo MyChampion={this.state.MyChampion} EnemyChampion={this.state.EnemyChampion} />
                                    : <SelectChampions />
                                    }
                                </div>
                            </td>

                            <td>
                                <div class="champion-pane-right">
 

                                    <div class="champion-pane-right-list">
                                        <ChampionList updateMethod={this.RightUpdate.bind(this)} />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>


            </div>
        )
    }

    LeftUpdate (champion) {
        this.setState(state => ({MyChampion: champion}))
        console.log(this.state.MyChampion)
    }
    RightUpdate (champion) {
        this.setState(state => ({EnemyChampion: champion}))
        console.log(this.state.EnemyChampion)
    }
}

export default MyApp;