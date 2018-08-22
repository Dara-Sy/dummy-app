Misc Notes: 
need to have one main parent tag inside a component
remember syntax is so important
create a new line when you return something

define function as a const
can be mutated, but can't replace entire thing
arrow function

In class Users Component, we have: 

        <User>John</User>
        <User>Jill</User>
        <User>Peter</User>

This is props passed as children from the functional Component User

const User = (props) => {
  return(
    <div>
      {props.children}
    </div>
    );
}
