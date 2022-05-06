import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const api = axios.create({
  baseURL : 'https://randomuser.me/api/'
})

function App() {
  
  constructor(){
    super();
    api.get('/').then(res => {
      console.log(res.data);
      this.setState({ results: res.data.results });
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        
        
        {this.state.results.map(results => <h2 key={results.gender}>{results.name}</h2>)}
        
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
