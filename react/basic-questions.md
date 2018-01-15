# Basic React questions

* [Allow different types of PropTypes for one prop](#react-proptypes---allow-different-types-of-proptypes-for-one-prop)


## React Component re-render
Here are some instances that a React component will re-render.

* Parent component rerender
* Calling this.setState() within the component. This will trigger the following component lifecycle methods shouldComponentUpdate > componentWillUpdate > render > componentDidUpdate
* Changes in component's props. This will trigger componentWillReceiveProps > shouldComponentUpdate > componentWillUpdate > render > componentDidUpdate (connect method of react-redux trigger this when there are applicable changes in the Redux store)
 * calling this.forceUpdate which is similar to this.setState

You can minimize your component's rerender by implementing a check inside your shouldComponentUpdate and returning false if it doesn't need to
## React PropTypes - Allow different types of PropTypes for one prop

[Stackoverflow link](https://stackoverflow.com/questions/41808428/react-proptypes-allow-different-types-of-proptypes-for-one-prop)

```javascript
SomeComponent.propTypes = {}
  someProp: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
}
```

