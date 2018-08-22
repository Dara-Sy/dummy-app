import React from 'react';

const User = (props) => {
  return(
    <div>
      {props.children}
    </div>
    );
}

export default User;


// write a pure function in this component
// define function as a const
// can be mutated, but can't replace entire thing
// arrow function
