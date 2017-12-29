# Basic React questions

* [Allow different types of PropTypes for one prop](#react-proptypes---allow-different-types-of-proptypes-for-one-prop)

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
