import React from 'react';
import './App.css';
import axios from 'axios';
import PlayerList from './components/PlayerList';
import NavBar from './components/NavBar';

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
        <NavBar />
        <PlayerList players={this.state.players}/>
      </div>
    );
  }
}  


export default App;
