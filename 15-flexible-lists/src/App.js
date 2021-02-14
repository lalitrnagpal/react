import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { id: 'key1', name: "Lalit", age: 44 },
      { id: 'key2', name: "Chea", age: 11 },
      { id: 'key3', name: "Dimpu", age: 6 },
      { id: 'key4', name: "Shanu", age: 40 }
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) =>  {
    const personIndex = this.state.persons.findIndex( p => { return p.id === id } );

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [ ...this.state.persons ];
    
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonsHandler = (personsIndex) => {       
    const persons = [...this.state.persons];
    persons.splice(personsIndex, 1);
    this.setState(
      {
        persons: persons
      }
    )
  }

  showHide = () => {
    console.log('state after toggle is ' + this.state );
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

    let persons = null;

    if (this.state.showPersons === true) {
      persons = (
        <div>
          {
            this.state.persons.map( ( person, index ) => {
                return <Person 
                          name = { person.name } 
                          age = { person.age } 
                          click={ () => this.deletePersonsHandler( index ) }
                          changed={ ( event ) => this.nameChangeHandler( event, person.id ) }
                        />
            })
          }
      </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React!</h1>
        </header>
        <br/><br/>
        <button onClick={this.showHide} style={mystyle}>Click Me</button>
        <br/><br/>
        <p className="App-intro">
          {persons}
        </p>
      </div>
    );
  }
}

export default App;
