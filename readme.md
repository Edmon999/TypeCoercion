# Type Coercion

## Built With
 Javascript


## parseInt 
```
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
```


## Type Coercion
#### Examples
```
"" + 1 + 0; // 10 string 
"" - 1 + 0; // -1
true + false; // 1
6 / "3"; // 2
"2" * "3"; // 6
4 + 5 + "px"; //" 9px"
"$" + 4 + 5; // "$45"
"4" - 2; // 2
"4px" - 2; // NaN
7 / 0; // infinity
" -9 " + 5; // ' -9 5'
" -9 " - 5; // -14
null + 1; // 1
undefined + 1; // NaN
```

## Getting Started
For running these project you need 

* VS CODE 

## Contact

Edmon - [edmon.sargsyan999@gmail.com](https://gmail.com) <br />


