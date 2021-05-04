const parseFloat = (num) => {
  if (typeof num !== "string") {
    return NaN;
  }
  let res = "";
  let count = 0;
  if (num[num.length - 1] === ".") {
    num = num.slice(0, num.length - 1);
  }
  num = num.split("");
  for (let i = 0; i < num.length; i++) {
    if (num[i] < 10) {
      res += num[i];
    }
    if (num[i] === ".") {
      if (count > 0) {
        return res;
      }
      res += num[i];
      count++;
    }
  }
  if (num[0] === ".") {
    res = 0 + res;
  }
  return +res;
};
