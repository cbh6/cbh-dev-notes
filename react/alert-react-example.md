# react-alert example

[react-alert npm](https://www.npmjs.com/package/react-alert)

```shell
npm install react-alert --save
```

Create Alert component.

It's neccessary to import AlertContainer.

```javascript
import React, { Component } from 'react';
import AlertContainer from 'react-alert';

class Alert extends Component {
  alertOptions = {
    offset: 14,
    position: 'top right',
    theme: 'light',
    time: 5000,
    transition: 'fade'
  };

  showAlert = (type, text) => {
    this.msg.show(text, {
      type
    });
  };

  render() {
    return (
      <div>
        <AlertContainer
          ref={msg => {
            this.msg = msg;
          }}
          {...this.alertOptions}
        />
      </div>
    );
  }
}

export default Alert;
```

Now import Alert component to show alerts in the main component.

```javascript
import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import Alert from '../components/shared/Alert';

class AlertExample extends Component {
  alertOptions = {
    offset: 14,
    position: 'top right',
    theme: 'light',
    time: 10000,
    transition: 'fade'
  };

  handleMessage = message => {
    this.alert.showAlert('success', message.text);
  };

  render() {
    return (
      <Container>
        <Header as="h1">react-alert example</Header>
        <Alert ref={alert => (this.alert = alert)} />
      </Container>
    );
  }
}

export default AlertExample;
```
