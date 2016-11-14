import React, { Component } from 'react';

var userFirstName 

var Todolisttable = React.createClass({
render: function(){
    return(
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
      <tr className="info">
        <td>Mark</td>
        <td>Cassidy</td>
        <td>test@test.com</td>
      </tr>
      <tr className="info">
        <td>Liam</td>
        <td>Grewer</td>
        <td>test@test.com</td>
      </tr>
      <tr className="info">
        <td>Jason</td>
        <td>Marshall</td>
        <td>test@test.com</td>
      </tr>
    </tbody>
  </table>
</div>
    );
}

});



export default Todolisttable;
