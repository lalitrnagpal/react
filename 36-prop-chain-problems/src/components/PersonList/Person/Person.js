import React, { Component } from 'react';
import Auxilliary from '../../hoc/Auxilliary';
import withClass from '../../hoc/withClass';
import PropTypes from 'prop-types';
import './Person.css';

class Person extends Component {

  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    // document.querySelector('input').focus();
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    return (
      <Auxilliary>
        <p>{this.props.isAuth}</p>
        { this.props.isAuth ? <p className='green'>Authenticated!</p> : <p className='red'>Please login first!</p> }
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key='i2' >{this.props.children}</p>
        <input key='i3' 
          type="text"
          className='inputText'
          onChange={this.props.changed}
          // ref={ (inputEl) => { this.inputElement = inputEl} }
          ref = { this.inputElementRef }
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
