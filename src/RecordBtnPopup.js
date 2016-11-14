import React, { Component } from 'react';

var RecordBtnPopup = React.createClass({
render: function(){
    return(
    <div className="container">
      <button type="button" className="btn btn-primary btn-lg btn-block" id="record-btn" onClick={this.clickMe}>Click to add new record</button>
    </div>
    );
},
clickMe: function(){
    <div className="container">
    <h1>hello</h1>
    </div>
}
});



export default RecordBtnPopup;