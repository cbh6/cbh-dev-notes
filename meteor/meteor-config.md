## ROOT_URL env variable

(development, production)

Used to generate URLs to your application by, among others, the accounts package. Provide a full URL to your application like this: ROOT_URL="https://www.myapp.com".

From the client `Meteor.absoluteUrl()`

Its also possible to override Meteor.absoluteUrl [+Info](https://stackoverflow.com/questions/15541918/cant-override-meteor-absoluteurl)

Try:

> `Meteor.absoluteUrl.defaultOptions.rootUrl = "http://mydomain.com"`
> In your Meteor.startup. If its not for individualizing settings you can also use the environmental variable ROOT_URL

Packages like [i18n-universe](https://github.com/vazco/meteor-universe-i18n) use `Meteor.absoluteUrl()` to download locale files. ROOT_URL must be set or absoluteUrl() overriden to get this package working.
