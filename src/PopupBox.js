import React, { Component } from 'react';

var PopupBox = React.createClass({
  render: function(){
    
    //This is the code for altering the visability of the popup, meaning if the popup is visable, apply the 'hide' class to it to make it not visable.
    //The actual code to trigger whether the popup should be shown or not when the button is clicked is in App.js
    const _class = !this.props.isVisible ? 'hide' : '';

    /*
      let _classes = 'modal';
      _classes += !this.props.isVisible ? ' fade' : '';

      modal fade
      modal
    */

    //Whether it should be visable or not is stored in _class, so you need to apply this as a className 
    return (
      <div className={ _class }>

      <div className="modal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">Modal title</h4>
            </div>
            <div className="modal-body">
              <ul>
                  <li>{this.props.name}</li>
                  <li>{this.props.surname}</li>
                  <li>{this.props.email}</li>
              </ul>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
});

export default PopupBox;
 