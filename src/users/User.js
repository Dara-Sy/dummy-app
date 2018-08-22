import React from 'react';

const User = (props) => {
  let age = props.age ? props.age : 'NA';
  // if props is children return the name and age
  if(props.children){
    return(
      <div>
        Name: {props.children} |
        Age: {age}
      </div>
      );
    } else {
      // return invalid entry if props is not entered/passed
      return(
        <div>Invalid Entry</div>
        )
    }
}

export default User;


// write a pure function in this component
// define function as a const
// can be mutated, but can't replace entire thing
// arrow function
