import React, { Component } from 'react';
import { people } from './App';

var userFirstName

var Todolisttable = React.createClass({
  render: function () {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr className="success">
              <th className="table-header">First name</th>
              <th className="table-header">Last name</th>
              <th className="table-header">Email</th>
            </tr>
          </thead>
          <tbody>
            {people.map(person => {
              return (<tr className="info" key={person.firstname}>
                <td>{person.firstname}</td>
                <td>{person.surname}</td>
                <td>{person.email}</td>
              </tr>)
            })}
          </tbody>
        </table>
      </div>
    );
  }

});



export default Todolisttable;
