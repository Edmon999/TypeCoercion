const myParseInt = (num, base = 10) => {
  if (typeof num !== "string") {
    return NaN;
  }
  numSystem = num.slice(0, 2);
  if (numSystem === "0x" || numSystem === "0b") {
    num = num.slice(2);
  }
  let arr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let text = "";
  let textBase = arr.slice(0, base);
  for (let el of num) {
    if (textBase.includes(el)) {
      text += el;
    } else {
      break;
    }
  }

  text = text.split("").reverse();
  let result = text.reduce((acc, el, index) => {
    return (acc += arr.indexOf(el) * base ** index);
  }, 0);
  return result;
};
