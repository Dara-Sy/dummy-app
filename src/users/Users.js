import React, { Component } from 'react';
import User from './User';

class Users extends Component {
  render() {
    return(
      <div>
        <User>John</User>
        <User>Jill</User>
        <User>Peter</User>

        <p>text</p>
      </div>
    )
  }
}

export default Users;

// need to have one main parent tag inside a component
// remember syntax is so important
// create a new line when you return something
