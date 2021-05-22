# REDUX BASICS

### store

- big object where global state lives

```
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
```

### reducer

- a function that receives the state (or initial state for the first time) and an action. It will return a new object with updated state
- a reducer is a function that always returns the same output having the same input
- when an action gets fired, all of our reducers (switch statements) will be executed, that's why we need a default case

```
const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
```

### rootReducer

- imports all our reducers and combine them using the redux function `combineReducers`

```
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
  user: userReducer
});
```

### action

- object containing the action type and the payload (this is the object that reducers will receive)
- action creator -> a function that is passed to dispatch on components
- basically it receives the payload value and returns an object with the action and the payload

```
export const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER',
  payload: user
});
```

### main file config

- index.js
- is the entry point of our application, it needs to wrap our main Application component with the redux provider in order to allow our components to have access to redux context (Store)

```
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
```

### connect and mapDispatchToProps

- connect -> every component that needs to use redux (get values from the store or dispatch actions) will have to be exported using this HOC
- mapDispatchToProps -> second argument that is sent to connect. It contains the actions that our component will receive from props

```
import { connect } from 'react-redux';

...
...
...

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
```

### mapStateToProps

- first argument sent to connect. It contains the values from the store that we need

```
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
```


* It's also useful to have the action types in a separated file
* If we dont pass mapDispatchToProps to conect, our component will receive dispatch, which we can use to trigger any action we want
* full example: https://github.com/zhangmyihua/lesson-21
