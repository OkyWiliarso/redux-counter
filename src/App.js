import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'
import {
  getDecrementAction,
  getIncrementAction
} from './redux/actions.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <h2>{this.props.counter}</h2>
          <button onClick={this.props.doIncrement}>+</button>
          <button onClick={this.props.doDecrement}>-</button>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    doIncrement: () => dispatch(getIncrementAction()),
    doDecrement: () => dispatch(getDecrementAction())  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
