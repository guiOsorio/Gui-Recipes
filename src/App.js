import { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Main from './components/Main'
import 'whatwg-fetch';


class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Title />
        </header>
        <Main />
      </div>
    );
  }
}

export default App;