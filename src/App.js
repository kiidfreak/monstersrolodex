import {Component} from 'react';

// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
      super();

    this.state = {
      monsters: [],
    };
  }

  //leveraging lifecycle methods
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users})); 
  }



  render() {
  return (
    <div className="App">
      {
        this.state.monsters.map(monster =>
           <div key={monster.id}>
            <h1>{monster.name}</h1>
            </div>)
      }

    </div>
  );
}
}

export default App;
