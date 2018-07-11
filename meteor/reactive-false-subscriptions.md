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
