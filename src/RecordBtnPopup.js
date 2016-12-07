import React, { Component } from 'react';

var RecordBtnPopup = React.createClass({
render: function(){
    return(
    <div className="container">
      <button type="button" className="btn btn-primary btn-lg btn-block record-btn" onClick={this.clickMe}>{this.props.label || 'Click me'}</button>
    </div>
    );
},
clickMe: function(){
    console.log('RecordBtnPopup', this);
    if (this.props.onClick) {
        this.props.onClick();
    }
}
});

//In the RecordBtnPopup class, the onClick={this.clickMe} part calls the function below it.
//The {this.props.label || 'Click Me'} part is the label that you add in the App.js file. For example:
// <RecordBtnPopup label="Click to delete a record" - this is what would be visable on the button, if there is no label added, it will default to 'Click me'

export default RecordBtnPopup;