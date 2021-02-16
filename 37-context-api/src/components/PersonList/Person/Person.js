import React, { Component } from 'react';
import Auxilliary from '../../hoc/Auxilliary';
import withClass from '../../hoc/withClass';
import PropTypes from 'prop-types';
import './Person.css';
import AuthContext from '../../../context/auth-context'

class Person extends Component {

  constructor(props) {
    super(props);
  }


  componentDidMount() {
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      <Auxilliary>
        <AuthContext.Consumer>
          {
            (context) => context.authenticated ? <p className='green'>Authenticated</p> : <p className='red'>Please login first!</p>
          }
        </AuthContext.Consumer>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key='i2' >{this.props.children}</p>
        <input key='i3' 
          type="text"
          className='inputText'
          onChange={this.props.changed}
          value={ this.props.name }
        />
      </Auxilliary>        
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, 'Person');
