# SPA

- In the past we asked to the server for a new html/js/css everytime we navigated through the web
- SPA give us a massive JS (react) css and a tiny HTML
- When the user navigates or interacts with the web, react re-renders different parts of the web using js. And we only ask for JSON data to server (APIs) (using ajax calls)
- These server can be third party servers such as google firebase, or our own servers

# JSX VS JS

- .jsx and .js is the same
- .jsx will be transformed into .js by webpack and babel
- using .jsx for react components is a personal preference
- the editor will recognize this kind of files and use a different icon
- this is useful to organize our code and our app structure
- the naming convention is also important asd.component.jsx f.ex


- react synthetic events
- asically, React wraps the browser native event into an instance of the React SyntheticEvent and passes it in React event handlers. ... SyntheticEvent has the same interface as a native event which means that you can use methods like preventDefault() and stopPropagation()


- this.state context
- on class components we can make use of this.state on render and lifecycle methods thanks to our class component is extending React.Component, which is who allow us to access the global this context
- If we want to access the class context from a function, it has to be an arrow function
- arrow function set this when the function is declared/defined, the context of the function is the app component (on the course example)
- when the arrow function come into existence to JS it binds any references to this inside of it to the context in which it was defined which is the app component
- A good rule of thumb is this: Use arrow functions on any class methods you define and aren't part of React (i.e. render(), componentDidMount()). 

# YARN

- `yarn list package` - see versions
- `yarn upgrade` - upgrade versions. If package version was defined on package.json using `^` it will try to take the latest non-breaking version from the one defined
- for ex `react: "^16.8.6"`, at least 16.8.6 or higher but not breaking
- yarn lock only updates when you run `yarn install`
- if we have a yarn.lock and we update any package.json version, we need to run yarn install to upgrade
- we cannot run yarn upgrade here

# NPM

- npm list
- npm update - npm doesnt need npm install before if we have changed any dep version
- yarn cant upgrade if we change any dep version, we need to yarn install.
- npm audit fix - to fix vulnerabilities

# react-router

- https://reactrouter.com/core/api/Switch
- `<Switch>`
- Renders the first child <Route> or <Redirect> that matches the location.

- Every route wrapped component receives 3 parameters
- **location**: where we are
- **history**: object with functions like push (to navigate)
- **match**: info about the matching route url


# Object destructuring

https://dmitripavlutin.com/javascript-object-destructuring/

> Often objects can be nested in other objects. In other words, some properties can contain objects. 
> const { nestedObjectProp: { identifier } } = expression;
> The above syntax is equivalent to:
> const identifier = expression.nestedObjectProp.identifier;

example: 

```
const hero = {
  name: 'Batman',
  realName: 'Bruce Wayne',
  address: {
    city: 'Gotham'
  }
};

// Object destructuring:
const { address: { city } } = hero;
city; // => 'Gotham'
```

- We can pass all object properties to a component by using destructuring
`const obj = {a:1, b:2}; <MyComp {...obj} />`

- Any anonymous function calls inside a component do get called again on every re-render. We can avoid this by using memoization `useCallback or useMemo` hooks

# Resources: Importing SVG In React

import { ReactComponent as Logo }
This is a new special syntax when importing SVG in React. The ReactComponent import name is special and tells Create React App that you want a React component that renders an SVG, rather than its filename. You can read more about it here, but keep in mind that this is a React library special syntax:

https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files

# CSS box-sizing: border-box

- the margin, padding and borders affect to elements size, which means that if an element has any of these values, the total size is affected
- `box-sizing: border-box` margin, padding and borders does not affect the element size

# setState tip

Instead of passing in an object to this.setState we can pass in a function and reliably get the value of the current state of our component. My submit function from above now looks like this:

```
submit(){
   this.setState(function(prevState, props){
      return {showForm: !prevState.showForm}
   });}
```

Passing in a function into setState instead of an object will give you a reliable value for your component’s state and props. One thing to note is that the React documentation makes use of arrow functions in their examples (which is also on my list of things to migrate to in my Shopsifter app!) so in my example above I’m using ES5 syntax for my function.

If you know you’re going to use setState to update your component and you know you’re going to need the current state or the current props of your component to calculate the next state, passing in a function as the first parameter of this.setState instead of an object is the recommended solution.
