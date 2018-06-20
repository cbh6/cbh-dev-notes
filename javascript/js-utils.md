# Some utils for working with javascript

[String utils for javascript](./utils/str-utils.js). This is a library with some util functions like: 
* Hexadecimal to string
* String to hexadecimal
* String checksum (8bit XOR)
* byteArray to string
* String to byteArray
* ...

**Useful libraries**
* [base64-js](https://www.npmjs.com/package/base64-js)
* [xorCrypt](https://www.npmjs.com/package/xor-crypt)

## Convert number to hexadecimal
```javascript
const n = 123456789;
const hexadecimal = n.toString(16);
```

## Conver hexadecimal to number

For example when you got hexadecimal representation of a timestamp
```javascript
const timestamp = new Date().getTime();
const hexTimestamp = timestamp.toString(16);
const timestampAgain = parseInt(hexTimestamp, 16);
```