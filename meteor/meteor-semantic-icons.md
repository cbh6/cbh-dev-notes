# Icon problems configuring meteor, react and semantic ui

[Info](https://react.semantic-ui.com/usage)

Ways to include semantic/react in a meteor project:

(Semantic ui React is used in all cases)

1 - Include semantic css via CDN

This works perfectly. Including in your html header
`<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>`

Problem, you manually have to update it when new versions of semantic ui are released.

When the web app starts, there is a little delay where your app doesn't have any semantic ui styles. This occur while semantic.ui.css is being downloaded.

2 - Download semantic-ui-css from npm and include it in main.js

This way will include semantic css in your bundle.

`npm install --save semantic-ui-css`
add in `main.js`
`import 'semantic-ui-css/semantic.min.css';`

Works perfectly with semantic ui react, however flag icons won't be shown unless included manually from css (each one by hand)

for example (es, gb flags)

```css
.es.flag::before {
  background: url(https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/themes/default/assets/images/flags.png)
    no-repeat -108px -1976px !important;
  background-position: 0 -1742px !important;
}

.gb.flag::before {
  background: url(https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/themes/default/assets/images/flags.png)
    no-repeat -108px -1976px !important;
  background-position: -36px -26px !important;
}
```

This is because flags are placed in `/themes/default/assets/images/flags.png` and meteor can't access this file (I wasn't able to get it working).

So, you need to use the flags from semantic ui CDN.

3 - Download semantic:ui-css from atmosphere (meteor add package)

https://atmospherejs.com/semantic/ui-css

This package is outdated, brings configured semantic for meteor but is not synced with SemanticUI last versions
