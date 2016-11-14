import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../bower_components/bootstrap-css/css/bootstrap.min.css';
import HeaderTitle from './Test.js';
import Todolisttable from './Todolisttable.js';
import Userinputs from './Userinputs.js';
import RecordBtnPopup from './RecordBtnPopup.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React</h2>
        </div>
        <Todolisttable />
        <Userinputs />
        <RecordBtnPopup />
      </div>
    );
  }
}


export default App;
