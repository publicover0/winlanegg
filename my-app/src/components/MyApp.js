import React, { Component } from "react";
import ChampionList from "./ChampionList";
import MatchupInfo from "./MatchupInfo";

class MyApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            MyChampion: "Aatrox",
            EnemyChampion: "Akali"
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
                                    <ChampionList updateMethod={this.LeftUpdate.bind(this)} />
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