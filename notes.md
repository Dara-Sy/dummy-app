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

This is props passed as children from the functional Component User:


        <div>
          {props.children}
        </div>
        );

In class App Component, we have:

      <div className="App">
        <Users title="Users List" />
        <p>Hello!</p>
      </div>

This is props passed as a title from Users to App: 

      <div>
        <h1>{this.props.title}</h1>
        <User>John</User>
        <User>Jill</User>
        <User>Peter</User>
        <p>text</p>
      </div>

Imports:

In Class Component you have to import { Component }
In the Functional/ES6 Component you don't have to import { Component }
No render() method is needed in Functional because it's only a part of Class 

Passing Props: 
In Class, taking props is automatically available 
In ES6, you need to pass props as an argument (don't have to use this.props.whatever)

When to use either Class or ES6?

Recommended - Use ES6 whenever possible 
But when maintaining State - Use Class 

A Container Component (usually Class) is the Top Component which encloses all other Components
Also referred to as a Presentation Component

State and Props:

State - makes React Component dynamic from the inside
Props - makes React Component dynamic from the outside 

You setState where you extend Component

 <button onClick={this.functionName()}</button>

The () on the function makes it execute right away

When to use Arrow Functions? 

On Users Component, cannot mutate state directly under arrow function
Must use setState



















