import logo from './logo.svg';
import './App.css';
import Champion from './components/Champion';

let champions = [  {      name: "Aatrox",      champId: 1  },  {      name: "Ahri",      champId: 2  },  {      name: "Akali",      champId: 3  },  {      name: "Alistar",      champId: 4  },  {      name: "Amumu",      champId: 5  },  {      name: "Anivia",      champId: 6  },  {      name: "Annie",      champId: 7  },  {      name: "Aphelios",      champId: 8  },  {      name: "Ashe",      champId: 9  },  {      name: "AurelionSol",      champId: 10  },  {      name: "Azir",      champId: 11  },  {      name: "Bard",      champId: 12  },  {      name: "Blitzcrank",      champId: 13  }];

function App() {
  return (
    <div className="App">

      <header className="App-header">
        {champions.map((champion, index) => (

          

          <div key={index}>
            <Champion name={champion.name} champId={champion.champId} />  
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;