/* This is a normal base58 but when it generates URL's they looks to artificial
base58 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
*/

const base58 = "gC4cWTpDEwmGoBjqkfbaszAMrFe3PhKLVXxdQY96iR5t1SUNnv7Jy8ZHu2";

// Takes a base10 input and turns it into a base58 output
const numToStr = num => {
  let encode = "";
  while (num) {
    let remainder = num % base58.length;
    num = Math.floor(num / base58.length);
    encode = base58[remainder].toString() + encode;
  }
  return encode;
};

// Takes a base58 input and turns it into a base10 output
const strToNum = str => {
  let decode = 0;
  while (str) {
    let index = base58.indexOf(str[0]);
    let power = str.length - 1;
    decode += index * Math.pow(base58.length, power);
    str = str.substring(1);
  }
  return decode;
};

module.exports = {
  numToStr,
  strToNum
};
