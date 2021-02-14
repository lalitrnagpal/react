import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    // 1. Rendering HTML directly
    // return React.createElement('div', null, 'h1', 'Hi, I\'m a React Component!');
    // 2. Rendering with React.createElement
    // return React.createElement('div', null, React.createElement('h1', null, 'A Header First'), 'Hi, I\'m a React Component!');
    // 3. Passing CSS in the java configuration object - 2nd parameter that was null
    return React.createElement('div',{className: 'App'}, React.createElement('h1', {className: App}, 'A Header First'), 'Hi, I\'m a React Component!');
  }
}

export default App;
