# ESLint + Prettier config on a React project

- We need ESLint and Prettier plugins installed on VSCode

## ESLint

- By using this config

```
  "extends": ["plugin:react/recommended", "plugin:prettier/recommended"],
  "plugins": [],
  "settings": { "react": { "version": "detect" } },
```

- We are telling ESLint to extend all the rules of react and prettier plugins
- By extending prettier plugin we are **running Prettier as an ESLint rule and reporting differences as individual ESLint issues**.
- We can also configure those rules

our .eslintrc 

```
{
  "root": true,
  "env": {
    "browser": true,
    "node": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "extends": ["plugin:react/recommended", "plugin:prettier/recommended"],
  "plugins": [],
  "settings": { "react": { "version": "detect" } },
  "rules": {
    "react/prop-types": 1,
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", "jsx"]
      }
    ],
    "react/no-array-index-key": 2,
    "react/no-unescaped-entities": 2,
    "react/jsx-props-no-spreading": 0,
    "react/react-in-jsx-scope": 0,
    "react/state-in-constructor": 2,
    "react/no-danger": 2,
    "react/forbid-prop-types": 1,
    "react/default-props-match-prop-types": 1,
    "react/require-default-props": 1,
    "max-len": ["error", { "code": 120 }],
    "no-console": 2,
    "no-unused-vars": 2,
    "no-nested-ternary": 2,
    "no-underscore-dangle": 1,
    "no-unused-expressions": [
      2,
      {
        "allowTaggedTemplates": true
      }
    ],
    "quotes": [
      2,
      "single",
      {
        "avoidEscape": true,
        "allowTemplateLiterals": true
      }
    ],
    "global-require": 2,
    "no-new": 1,
    "new-cap": 1
  }
}

```

## Prettier

- We need to configure some rules on our .prettierrc file

```
{
  "singleQuote": true,
  "trailingComma": "all",
  "jsxBracketSameLine": true,
  "printWidth": 120,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true
}
```

- And configure the prettier extension as our default formatter on the VSCode settings `"editor.defaultFormatter": "esbenp.prettier-vscode",`

## More

Needed dependencies

```
  "eslint-config-prettier": "^6.12.0",
  "eslint-loader": "^4.0.2",
  "eslint-plugin-prettier": "^3.1.4",
  "eslint-plugin-react": "^7.21.3",
  "prettier": "^2.1.2",
```

`npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier`

> As a reminder, eslint-config-prettier will disable all ESLint formatting rules that may conflict with Prettier’s rules. eslint-plugin-prettier is the plugin that will add Prettier’s formatting rules.


## Docs

- https://thomlom.dev/setup-eslint-prettier-react/
