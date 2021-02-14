import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import DynamicContent from './DynamicContent/DynamicContent';
import Properties from './DynamicContent/Properties'

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
        { name: "Lalit", age: 44 },
        { name: "Sasha Nagpal", age: 11 },
        { name: "Nyra Nagpal", age: 6 },
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
          <Person />          
          <DynamicContent></DynamicContent>
          <Properties name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Properties name={this.state.persons[1].name} age={this.state.persons[1].age} > *** Some content passed here *** </Properties>
          <Properties name={this.state.persons[2].name} age={this.state.persons[2].age} />
          <Properties name={this.state.persons[3].name} age={this.state.persons[3].age} />
        </p>
        <p className="App-intro">Other state is: { this.state.someOtherState }</p>		{ /* other state, not disturbed */ }
      </div>
    );
  }
}

export default App;
