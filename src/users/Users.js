import React, { Component } from 'react';
import User from './User';

class Users extends Component {
  render() {
    return(
      <div>
        <h1>{this.props.title}</h1>
        <User></User>
        <User age="30">Jill</User>
        <User age="40">Peter</User>

        <p>text from the Users Component</p>
      </div>
    )
  }
}

export default Users;

// need to have one main parent tag inside a component
// remember syntax is so important
// create a new line when you return something
