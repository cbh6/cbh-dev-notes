## Run multiple async functions in parallel

For example, lets say we want to read files in parallel, each file is read with fs-promise which returns a promise.

> If you want to read the files in parallel. Each of the async callback function calls does return a promise. Just use map, and you can await the array of promises that you'll get with Promise.all:

```javascript
import fs from 'fs-promise';

async function printFiles() {
  const files = await getFilePaths();

  await Promise.all(
    files.map(async file => {
      const contents = await fs.readFile(file, 'utf8');
      console.log(contents);
    })
  );
}
```

Another example: We want to make http requests in parallel.
We have an array of 'devices' and we want to get info for each device making http calls to an external api.

```javascript
import fetch from 'node-fetch';

async function getDevicesInfo() {
  const devices = await this.repoDevices.findAll();

  await Promise.all(
    devices.map(async device => {
      const endpoint = `myapi.com/device/${device.id}`;
      const response = await fetch(endpoint).then(res => res.json());

      console.log(response);
    })
  );
}
```
