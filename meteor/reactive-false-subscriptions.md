# reactive:false subscriptions

```javascript
export default withTracker(() => {
  const handleUsers = Meteor.subscribe('all-usernames');

  return {
    users: Users.find({}, { sort: { username: 1 }, reactive: false }).fetch();
  };
})(Page);
```

Doing reactive:false from the client forces subscription to be non-reactive.

> Passing reactive: false means that minimongo itself doesn't set up some code to say "observe and if it changes, invalidate"

Also, the server query wont be executed if the browser has the subscription data in minimongo cache. It will directly fetch the data from minimongo cache