import React, { Component } from "react";
import ChampionList from "./ChampionList";
import MatchupInfo from "./MatchupInfo";
import Welcome from "./Welcome";

let matchups = require("./Matchups.json");

class MyApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            MyChampion: "",
            EnemyChampion: "",
            EnemyChampionList: [],
            AllyChampionList: [],
            inputvalue: ""
        };
    }

    

    render() {
        return(
            <div class="all">
                <nav class="navbar navbar-expand-lg navbar-light bg-info">
                    <div class="container-fluid winlane-gg">
                    <span class="navbar-brand mb-0 h1">Winlane.GG</span>
                    </div>
                </nav>

                <table>
                    <tbody> 
                        <tr>
                            <td>
                                <ChampionList updateMethod={this.LeftUpdate.bind(this)} EnemyChampionList={this.state.AllyChampionList} filterText={this.state.inputvalue} headerText="Choose your champion!" />
                            </td>

                            <td>
                                <div class="matchup-info">
                                    {(this.state.MyChampion !== "" && this.state.EnemyChampion !== "")
                                    ? <MatchupInfo MyChampion={this.state.MyChampion} EnemyChampion={this.state.EnemyChampion} />
                                    : <Welcome />
                                    }
                                </div>
                            </td>

                            <td>
                                <div class="champion-pane-right">

                                <div class="champion-pane-right-list">
                                    <ChampionList updateMethod={this.RightUpdate.bind(this)} EnemyChampionList={this.state.EnemyChampionList} headerText="Choose enemy champion!"/>
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
        this.GetEnemyChampionList(champion)
    }
    RightUpdate (champion) {
        this.setState(state => ({EnemyChampion: champion}))
    }
    GetEnemyChampionList (champion) {
        let EnemyChampList = [];
        let AllyChampionMatchupList = matchups[champion];
        Object.keys(AllyChampionMatchupList).forEach(function(key) {
            EnemyChampList.push(AllyChampionMatchupList[key].index);
        })
        this.setState(state => ({EnemyChampionList: EnemyChampList}))
    }
}

export default MyApp;