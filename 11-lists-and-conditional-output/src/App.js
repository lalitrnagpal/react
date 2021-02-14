import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { name: "Lalit", age: 44 },
      { name: "Chea", age: 11 },
      { name: "Dimpu", age: 6 },
      { name: "Shanu", age: 40 }
    ],
    showPersons: false
  }

  togglePersonsHandler = (event) => {       
    this.setState( {                        
      persons: [
        { name: "Lalit Nagpal", age: 44 },
        { name: "Sasha Nagpal", age: 11 },
        { name: "Dimpu Nagpal", age: 6 },
        { name: "Shanu", age: 40 }
      ],
    }
    );
  }

  toggleShow = () => {
    this.setState( { showPersons: !this.state.showPersons} );
  }

  render() {

    const mystyle = {
      backgroundColor: 'salmon',
      font: 'inherit',
      border: '2px solid black',
      padding: '12px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React!</h1>
        </header>
        <br/><br/>
        <button onClick={this.toggleShow} style={mystyle}>Click Me</button>
        <br/><br/>
        <p className="App-intro">
          { this.state.showPersons ?
            <div>
              <Person 
                  name={this.state.persons[0].name} 
                  age={this.state.persons[0].age} 
              />
              <Person 
                  name={this.state.persons[1].name} 
                  age={this.state.persons[1].age} 
              />
              <Person 
                  name={this.state.persons[2].name} 
                  age={this.state.persons[2].age} 
              />
            </div>
            : null
          }
        </p>
      </div>
    );
  }
}

export default App;
