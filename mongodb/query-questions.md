# Mongodb Query questions

## Find a document by non-existence of a field?

Try the $exists operator:

```javascript
db.mycollection.find({ price: { $exists: false } });
```

Also

```javascript
db.things.find({ a: { $exists: false } }); // return if a is missing
```

When is true, $exists matches the documents that contain the field, including documents where the field value is null. If is false, the query returns only the documents that do not contain the field.

## Add a value to an array unless the value is already present: $addToSet

```javascript
db.mycollection.update({ _id: id }, { $addToSet: { field: value } });
```

## Find records where document array field is not empty

```javascript
db.mycollection.find({ arrayField: { $exists: true, $not: { $size: 0 } } });
```
