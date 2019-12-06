import React from 'react';
import './App.css';
import axios from 'axios';
import PlayerList from './components/PlayerList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then(response => {
      this.setState({players: response.data})
      console.log('this is state', this.state.players)
    })
  } 

  render() {
    return (
      <div className="App">
        Hi y'all
        <PlayerList players={this.state.players}/>
      </div>
    );
  }
}  


export default App;
