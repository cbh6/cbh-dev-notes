https://github.com/bonnie/udemy-react-testing-projects

- Jest runs tests from files that are not commited yet.
- Enzyme
	- Search through DOM: jQuery style selectors
	- Simulate simple events
	- Shallow Rendering -> render components only one level deep. Cleaner and quicker testing. More isolated
	- Mount: Renders the react component and its children
	- Access to props and state
	- Manipulate values
	- Examine/test for values


https://github.com/bonnie/udemy-react-testing-projects

- A test fails when an error is thrown

- Test behavior (what the app should do), not Implementation
- If we refactor the coe we don't need to rewrite tests as long as the behavior has changed.
- CRA doesn't come with enzyme installed `npm install --save-dev enzyme jest-enzyme enzyme-adapter-react-16`
- A good basic test is that the component renders without error.
- Test descriptions provide better documentation. Be very specific
- One expect per test if possible
- For example, instead of doing one test to check if App, Button and DisplayCounter are rendered correctly, we can create 3 different tests to check every component separately.
- npm check-prop-types. Returns errors instead of logging them to the console.error.
-  We can use checkPropTypes in our tests to check that there are no PropType errors.
- CRA -> jest configuration on /src/setupTests.js
- No CRA -> we need to tell jest where our config is on a jest.config.js file on the root. And then we can create our /src/setupTests.js
