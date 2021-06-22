import './App.css';
import ChampionList from './components/ChampionList';
import MatchupInfo from './components/MatchupInfo';

function App() {
  return (
    <div class="all">
      <nav class="navbar navbar-expand-lg navbar-light bg-info">
        <div class="container-fluid winlane-gg">
          <span class="navbar-brand mb-0 h1">Winlane.GG</span>
        </div>
      </nav>

      <table>
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
                <ChampionList />    
              </div>
            </div>
          </td>

          <td>
            <div class="matchup-info">
              <MatchupInfo MyChampion="Camille" EnemyChampion="Aatrox" />
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
                <ChampionList />
              </div>
            </div>
          </td>
        </tr>
      </table>


    </div>
  );
}

export default App;