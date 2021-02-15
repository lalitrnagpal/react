import React, { PureComponent } from 'react';

import Person from './Person/Person';

class PersonList extends PureComponent {

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[PersonList.js] shouldComponentUpdate');
  //   if (nextProps.persons !== this.props.persons 
  //     || nextProps.changed != this.props.changed 
  //     || nextProps.clicked != this.props.clicked ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[PersonList.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  // componentWillUpdate() {

  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[PersonList.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[PersonList.js] componentWillUnmount');
  }


  render() {
    console.log('[PersonList.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default PersonList;