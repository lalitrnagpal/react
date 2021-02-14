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
    someOtherState: "This is some other state!"
  }

  nameChangedHandler = (event) => {         // thats our handler
    this.setState( {                        // need to pass this to input of Person.js
      persons: [
        { name: "Lalit Nagpal", age: 44 },
        { name: event.target.value, age: 11 },
        { name: "Dimpu Nagpal", age: 6 },
        { name: "Shanu", age: 40 }
      ] }
    );
  }

  changeSecondBoxValue = () => {
    this.setState( {                        // need to pass this to input of Person.js
      persons: [
        { name: "A New Name 1", age: 44 },
        { name: "A New Name 2", age: 11 },
        { name: "A New Name 3", age: 6 },
        { name: "A New Name 4", age: 40 }
      ] }
    );
  }

  render() {

    const mystyle = {
      backgroundColor: 'lightgrey',
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
        <button onClick={this.changeSecondBoxValue} style={mystyle}>Click Me</button>
        <br/><br/>
        <p className="App-intro">
          <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} 
          />
          <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age} 
              changed={this.nameChangedHandler}
          />
          <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age} 
          />
        </p>
      </div>
    );
  }
}

export default App;
