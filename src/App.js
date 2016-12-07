import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../bower_components/bootstrap-css/css/bootstrap.min.css';
import Todolisttable from './Todolisttable.js';
import PopupBox from './PopupBox.js';
import RecordBtnPopup from './RecordBtnPopup.js';

export let people = [{
  firstname: 'Mark',
  surname: 'Cassidy',
  email: 'test@test.com'
}, 
{ 
  firstname: 'Qassim',
  surname: 'Farid (Kaboom)',
  email: 'test@test.com'
}, {
  firstname: 'Liam',
  surname: 'Grewer',
  email: 'test@test.com'
}, {
  firstname: 'Jason',
  surname: 'Marshall',
  email: 'test@test.com'
}, {
  firstname: 'Laura',
  surname: 'Walls',
  email: 'test@test.com'
}]

class App extends Component {

  constructor(props) {

    super(props);

    //By default the popup isn't visable
    this.state = {
      isPopupVisible: false
    }
  }

  //When clicking the new record button, it sets the pop up to be visable
  onNewRecordClick() {
    this.setState({
      isPopupVisible: true
    });
  }

  //When clicking the delete record button, it sets the pop up to be visable
  onDeleteRecordClick() {
    this.setState({
      isPopupVisible: true
    });
  }

  PopupBoxClose(){
    this.setState({
      isPopupVisible: false
    })
  }

  render() {
    const isPopupVisible = this.state.isPopupVisible;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Project</h2>
        </div>
        <Todolisttable />
        <RecordBtnPopup label="Click to add new record" onClick={this.onNewRecordClick.bind(this)} />
        <RecordBtnPopup label="Click to delete a record" onClick={this.onDeleteRecordClick.bind(this)} />
        { people.map(person => {
          return (<PopupBox name={person.firstname} isVisible={isPopupVisible} />) 
        }) }
        { people.map(person => {
          return (<PopupBox name={person.surname} isVisible={isPopupVisible} />) 
        }) }
        { people.map(person => {
          return (<PopupBox name={person.email} isVisible={isPopupVisible} />) 
        }) }
      </div>
    );
  }
}


export default App;
