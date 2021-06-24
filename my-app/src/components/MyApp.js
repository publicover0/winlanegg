import React, { Component } from "react";
import ChampionList from "./ChampionList";
import MatchupInfo from "./MatchupInfo";

let matchups = require("./Matchups.json");

class MyApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            MyChampion: "Aatrox",
            EnemyChampion: "Akali",
            EnemyChampionList: [],
            AllyChampionList: []
        };
    }

    handleClick = () => {
        const childelement = this.leftChampionList.current;
        
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
                                <div class="champion-pane-left">
                                <nav class="navbar navbar-light bg-light">
                                    <span class="navbar-brand"> Choose your champion:</span>
                                    <form>
                                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    </form>
                                </nav>

                                <div class="champion-pane-left-list">
                                    <ChampionList updateMethod={this.LeftUpdate.bind(this)} EnemyChampionList={this.state.AllyChampionList}  />
                                </div>
                                </div>
                            </td>

                            <td>
                                <div class="matchup-info">
                                <MatchupInfo MyChampion={this.state.MyChampion} EnemyChampion={this.state.EnemyChampion} />
                                </div>
                            </td>

                            <td>
                                <div class="champion-pane-right">
                                <nav class="navbar navbar-light bg-light champion-pane-right-nav">
                                    <span class="navbar-brand"> Choose enemy champion:</span>
                                    <form>
                                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    </form>
                                </nav>

                                <div class="champion-pane-right-list">
                                    <ChampionList updateMethod={this.RightUpdate.bind(this)} EnemyChampionList={this.state.EnemyChampionList} />
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