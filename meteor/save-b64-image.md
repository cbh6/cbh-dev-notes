# Save base64 string to jpeg image using fs.writeFile

```javascript
    const fs = Npm.require('fs');
    const imageName = `snapshot.jpeg`;
    const path = `${process.env.PWD}/uploads/snapshots/`;
    const base64Data = imageCode.replace(/^data:image\/jpeg;base64,/, '');

    fs.writeFile(
      path + imageName,
      base64Data,
      'base64',
      (err) => {
        console.log('saved !!!');
      }),
    );
```
