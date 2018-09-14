## Scroll to a specific component or element when something happens

Note: Since findDOMNode will be deprecated [Read more](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md). I'm going to use callback refs instead.

Say we want to do a smooth scroll to the footer when the user clicks on a button

- First we need to create a ref
- Attach a React Element to that ref `<div ref={this.myRef} />`
- Use this.myRef.scrollIntoView method (instead of ReactDOM.findDomNode().scrollIntoView() ...)
- You can pass `{ behavior: 'smooth' }` to the method. [More info](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)

```javascript
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.footerRef = React.createRef();
  }

  scrollDownToFooter = () => {
    this.footerRef.scrollIntoView({ behavior: 'smooth' });
  };

  render() {
    return (
      <section className="assistant-step left-align">
        <button onClick={this.scrollDownToFooter}>
          Scroll to footer
        </button>
        <div>Section 1</div>
        <div>Section 2</div>
        <footer ref={this.footerRef}>
          <p>Posted by: Cristian Botella</p>
          <p>Contact information: <a href="mailto:cri.bh6@gmail.com">
          someone@example.com</a>.</p>
        </footer>
      </section>
    );
  }
}
```
