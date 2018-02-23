// URL Generation Algorithm
const base58 = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
const base58Array = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
let randNums = [];
let shortURL = "";

const getFive = () => {
  for (let i = 0; i < 5; i++) {
    randNums.push(Math.random());
  }
  return randNums;
};

const createNewShortURL = () => {
  shortUrl = "";
  randNums = [];
  getFive();
  let link = [];
  for (let i = 0; i < randNums.length; i++) {
    let temp = Math.floor(base58Array.length * randNums[i]);
    link.push(base58Array[temp]);
  }
  let shortURL = link.join("");
  return shortURL;
};

module.exports = {
  createNewShortURL
};
