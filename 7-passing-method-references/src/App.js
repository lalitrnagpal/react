import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import DynamicContent from './DynamicContent/DynamicContent';

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

  switchNameHandler = () =>  {
    this.setState(
      {
      persons: [
        { name: "Lalit Nagpal", age: 44 },
        { name: "Sasha Nagpal", age: 11 },
        { name: "Dimpu Nagpal", age: 6 },
        { name: "Shanu Nagpal", age: 40 }
      ]
    }
    );
  }


  switchNameHandlerPassValue = (newName) =>  {
    this.setState(
      {
      persons: [
        { name: newName, age: 44 },
        { name: "Sasha Nagpal", age: 11 },
        { name: "Dimpu", age: 6 },
        { name: "Shanu", age: 40 }
      ]
    }
    );
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <br/><br/>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <br/><br/>
          <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age} 
              click={this.switchNameHandler}                                                       // Passing method reference so that can click from paragraph 
          />
          <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age} 
              click={this.switchNameHandlerPassValue.bind(this, 'John Rambo!')}                    // Passing method reference and this time with a value
          />
          <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age}  
              click={this.switchNameHandlerPassValue.bind(this, 'John!', 'Rambo!', 'Joker!')}>     { /* Passing method reference with list of values  */ }
                *** Some content passed here *** 
          </Person>
          <Person 
              name={this.state.persons[3].name} 
              age={this.state.persons[3].age}  
              click={ () => this.switchNameHandlerPassValue('John!!') }>                           { /* Passing method reference using ES6 function syntax */ }
          </Person>
        </p>
        <p className="App-intro">Other state is: { this.state.someOtherState }</p>		{ /* other state, not disturbed */ }
      </div>
    );
  }
}

export default App;
