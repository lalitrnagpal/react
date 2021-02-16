import React, { Component } from 'react';

import classes from './App.css';
import PersonList from '../components/PersonList/PersonList';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../components/hoc/withClass';
import Auxilliary from '../components/hoc/Auxilliary';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'key1', name: 'Lalit Nagpal', age: 44 },
      { id: 'key2', name: 'Yamini Nagpal', age: 40 },
      { id: 'key3', name: 'Sasha Nagpal', age: 11 },
      { id: 'key4', name: 'Nyra Nagpal', age: 6 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
        return {
          persons: persons,
          changeCounter: prevState.changeCounter + 1
        }
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  loginHandler = () => {
    this.setState(
      {
        authenticated: true,
        showPersons: false
      }
    );
    setTimeout( () => {this.togglePersonsHandler()}, 1000);
  }

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <PersonList
          persons = { this.state.persons }
          clicked = { this.deletePersonHandler }
          changed = { this.nameChangedHandler }
          isAuthenticated = { this.state.authenticated }
        />
      );
    }

    return (
      <Auxilliary>
        <br/>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
          className='redButton'
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={ this.props.appTitle }
            showPersons={ this.state.showPersons }
            personsLength={ this.state.persons.length }
            clicked={ this.togglePersonsHandler }
            login={ this.loginHandler }
          />
        ) : null}
        <br/>
        {persons}
      </Auxilliary>
    );
  }
};

export default withClass(App, 'App');
