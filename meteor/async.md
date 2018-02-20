# Async Methods with wrapAsync

> ES6 feature async/await is better to handle this kind of situations.

[Official documentation - #Meteor-wrapAsync](https://docs.meteor.com/api/core.html#Meteor-wrapAsync)

```javascript
Meteor.wrapAsync(func, [context]);
```

Wrap a function that takes a callback function as its final parameter. The signature of the callback of the wrapped function should be function(error, result){}. On the server, the wrapped function can be used either synchronously (without passing a callback) or asynchronously (when a callback is passed). On the client, a callback is always required; errors will be logged if there is no callback. If a callback is provided, the environment captured when the original function was called will be restored in the callback.

**ARGUMENTS**

func Function
A function that takes a callback as its final parameter

context Object
Optional this object against which the original function will be invoked

## Example: How to call asynchronous functions inside a Meteor.method and return the result / handle errors

[Link to the example in stackoverflow](https://stackoverflow.com/questions/31282493/dealing-with-meteor-error-and-wrapasync-best-methods)

> I'm using a simple API that takes a US zipcode and returns the location information:

/server/methods.js

```javascript
var getLocationAsync = function(zipcode, callback) {
  HTTP.call('GET', 'http://api.zippopotam.us/us/' + zipcode, function(error, result) {
    callback(error, result);
  });
};

var getLocationWithWrap = Meteor.wrapAsync(getLocationAsync);

Meteor.methods({
  getLocationWithWrap: function(zipcode) {
    return getLocationWithWrap(zipcode);
  }
});
```

If you do

```javascript
Meteor.call('getLocationWithWrap', '94043', function(error, result) {
  if (error) {
    console.log('here is the error: ', error);
  } else {
    console.log('success: ', result);
  }
});
```

You get a proper response. But if you pass in an invalid zipcode:

```javascript
Meteor.call('getLocationWithWrap', '940', function(error, result) {
  if (error) {
    console.log('here is the error: ', error);
  } else {
    console.log('success: ', result);
  }
});
```

You get just a generic Internal server error [500] which is meaningles

**Handle error using try/catch**

```javascript
Meteor.methods({
  getLocationWithWrapTryCatch: function(zipcode) {
    try {
      return getLocationWithWrap(zipcode);
    } catch (error) {
      // the error object just contains a 'stack' key
      // and the value is difficult to use
      // but the error is a 404 rather than a 500
      throw new Meteor.Error(error.stack);
    }
  }
});
```

Doing:

```javascript
Meteor.call('getLocationWithWrapTryCatch', '940', function(error, result) {
  if (error) {
    console.log('here is the error: ', error);
  } else {
    console.log('success: ', result);
  }
});
```

results in an error object that's difficult to parse.

[More proper info](https://github.com/meteor/meteor/issues/2774#issuecomment-70710564)
