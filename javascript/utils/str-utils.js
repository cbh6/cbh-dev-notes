module.exports = {
  /**
   * Returns the 8 bit XOR checksum of a string
   * @param {string} str string for checksum
   * @returns {byte} the xor checksum
   */
  checksum(str) {
    let check = 0;
    // iterate over the string, XOR each byte with the total sum:
    for (let c = 0; c < str.length; c += 1) {
      check ^= str.charCodeAt(c);
    }
    // return the result
    return check;
  },

  toHex(str) {
    let hex = '';
    for (let i = 0; i < str.length; i += 1) {
      hex += str.charCodeAt(i).toString(16);
    }
    return hex;
  },

  /**
   * Returns the HEX representation of a string
   * @param {array} byteArray of bytes
   * @returns {string} the string representation
   */
  toHexString(byteArray) {
    return Array.from(byteArray, byte => `0${(byte & 0xff).toString(16)}`.slice(-2)).join('');
  },

  hexToString(hex) {
    let string = '';
    for (let i = 0; i < hex.length; i += 2) {
      string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return string;
  },

  byteArrayToString(byteArray) {
    return String.fromCharCode.apply(null, byteArray);
  },

  getBytes(str) {
    const bytes = [];
    for (let i = 0; i < str.length; i += 1) {
      bytes.push(str.charCodeAt(i));
    }
    return bytes;
  },

  /**
   * Generates a random string of ASCII Characters
   * @param {number} stringLength length
   * @returns {string} the random string
   */
  randomString(stringLength) {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    let randomstring = '';
    for (let i = 0; i < stringLength; i += 1) {
      const rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
    return randomstring;
  },

  setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
  },
};
