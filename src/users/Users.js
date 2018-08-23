import React, { Component } from 'react';
import User from './User';

class Users extends Component {
  state = {
    users: [
      {name:"John", age:20},
      {name:"Jill", age:30},
      {name:"Peter", age:40}
    ],
    title: "Users List"
  };

  render() {
    return(
      <div>
        <h1>{this.props.title}</h1>

        <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
        <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
        <User age={this.state.users[2].age}>{this.state.users[2].name}</User>

        <p>text from the Users Component</p>
      </div>
    )
  }
}

export default Users;

// need to have one main parent tag inside a component
// remember syntax is so important
// create a new line when you return something
