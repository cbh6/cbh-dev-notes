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
