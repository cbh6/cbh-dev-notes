## How bodyParser() works

Info extracted from [this awesome Medium post](https://medium.com/@adamzerner/how-bodyparser-works-247897a93b90)

> For POST requests you need to use bodyParser() if you want the form data to be available in req.body.

**_bodyParser_** returns a function that acts as middleware. The function listens for req.on(‘data’) and constructs req.body from the chunks of data it gets.

There are a bunch of different ways to format the data you POST to the server:

* application/x-www-form-urlencoded
* multipart/form-data
* application/json
* application/xml
* maybe some others

In brief, bodyParser has to parse the data differently depending on its type. And so you need to do something like this (from Express docs):

```javascript
var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data
```

From Exrpess v.4.16.0 onwards bodyParser is not neccessary. There [are express built-in middleware functions(http://expressjs.com/es/api.html#express.json)

```javascript
var app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
```
