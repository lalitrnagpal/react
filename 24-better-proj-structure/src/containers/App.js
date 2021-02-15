import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import PersonList from '../components/PersonList/PersonList';

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
    this.setState( { persons: persons } );
  }

  showHide = () => {
    console.log('state after toggle is ' + this.state );
    this.setState( { showPersons: !this.state.showPersons} );
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <PersonList
          persons={this.state.persons}
          clicked={this.deletePersonsHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return ( 
      <div className='classes.App'>
        <Cockpit 
          showPersons={this.state.showPersons}
          persons={this.state.persons} 
          clicked={this.showHide}
          /> 
           {persons}

      </div>

    )
  }
}

export default App;
