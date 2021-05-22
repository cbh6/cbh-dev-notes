# ESLint / Prettier config

extends -> uses a config file that applies a set of rules
plugin -> provide a set of rules that oyu can individually apply depending on your need. Having a plugin doenst enforce any rule. You have to choose which rules you need

- A plugin may provide you with zero, one or more config files. If the plugin provides config file, you can load in the extends section after adding the plugin in the plugins section

- essentially plugins give you some rules that have been coded and you can choose which ones are relevant
- if the plugin come with some config files we can use their rules by setting the config file on the extends section
- providing a config file is not mandatory for a plugin

https://stackoverflow.com/questions/53189200/whats-the-difference-between-plugins-and-extends-in-eslint


# En mi caso 

package.json
```
  "devDependencies": {
    "eslint": "^7.10.0",
    "eslint-config-prettier": "^6.12.0",
    "eslint-loader": "^4.0.2",
    "eslint-plugin-prettier": "^3.1.4",
    "eslint-plugin-react": "^7.21.3",
    "prettier": "^2.1.2"
  }
```

.eslintrc
```
{
  "root": true,
  "env": {
    "browser": true,
    "node": true
  },
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "extends": ["plugin:react/recommended", "plugin:prettier/recommended"],
  "plugins": [],
  "settings": { "react": { "version": "detect" } },
  "rules": {
    ...
  }
}

```

- Al extender de los plugins react y prettier no necesitamos añadir estos en la sección `plugins`
- Simplemente añadiendo `"extends": ["plugin:react/recommended", "plugin:prettier/recommended"]` ya le estamos diciendo a eslint que utilice las reglas de ambos plugins.
- Si quisiéramos modificar alguna de ellas, podríamos hacerlo en la sección rules
- De igual manera podemos añadir reglas que queramos usar, bien sea instalando un plugin nuevo, añadiéndolo a la sección `plugins` como `eslint-plugin-import` y colocando las reglas que necesitemos en la sección `rules`, o utilizando alguna config file que nos provea dicho plugin u otro cualquiera.

---

Extends uses a config file which applies set of rules when you add that to the extends options. A plugin on the other hand provides you with a set of rules that you can individually apply depending on your need. Just having a plugin does not enforce any rule. You have to choose which rules you need. A plugin may provide you with zero, one, or more configuration files. If the plugin provides configuration file, then you can load that in your extends section after adding the plugin in the plugins section.

So essentially, plugins given you some rules that have been coded and you can choose which ones are relevant. It may also provide config files to apply rules that the authors think are logically grouped/relevant but providing a config file is not mandatory for a plugin. extends, on the other hand, provides you the ability to apply rules in bulk based on config file specifications.

Example Plugin - eslint-plugin-react:
```
"plugins": [
  "react"
],
"extends": [
  "eslint:recommended",
  "plugin:react/recommended"
]
```

Example Config - eslint-config-google:
```
"extends": [
  "google"
]
```
