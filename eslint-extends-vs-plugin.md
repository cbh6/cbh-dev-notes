https://stackoverflow.com/questions/53189200/whats-the-difference-between-plugins-and-extends-in-eslint

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
