function getMaxValueFromArray(array) {
  // return Math.max.apply(null, array);
  return Math.max(...array);
  // 이런방법도 있다
}
console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3]));

function getMinValueFromArray(array) {
  return Math.min.apply(null, array);
}
console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3]));

function numPY(s) {
  if (!s) return true;
  const str = s ? s.toUpperCase() : '';
  let cntP = 0;
  let cntY = 0;
  for (let i = 0; i < s.length; i++) {
    if (str[i] === 'p') cntP += 1;
    if (str[i] === 'y') cntY += 1;
  } return cntP === cntY;
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy'));     // false
console.log(numPY('ab'));      // true
console.log(numPY(''));        // true
console.log(numPY());          // true

5
function toWeirdCase(s) {
  const wordArr = s.split('');
  function toUpperLower(str) {
    let res = '';
    for (let i = 0; i < str.length; i++) {
      res += i % 2 ? str[i].toLowerCase() : str[i].toUpperCase();
    }
    return res;
  }

  for (let i = 0; i < wordArr.length; i++) {
    wordArr[i] = toUpperLower(wordArr[i]);
  }
  return wordArr.join(' ');
}

console.log(toWeirdCase('hello world')); // 'HeLlO WoRlD'

6
function hideNumbers(string) {
  const str = string;
  let strobj = '';
  for (let i = 0; i < str.length - 4; i++) {
    strobj += str[i].replace(str[i], '*');
  }
  const res = str.substring(str.length - 4);
  return strobj + res;
}
console.log(hideNumbers('01033334444'));
console.log(hideNumbers('027778888'));


7



function strToInt(str) {
    return Number(str);
}
  
  console.log(strToInt('1234'));  // 1234
  console.log(strToInt('-1234')); // -1234

8



function waterMelon(n) {
  let res = '';
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      res += '수';
    } else res += '박';
  }
  return res;
}

console.log('n이 3인 경우: '+ waterMelon(3));
console.log('n이 4인 경우: '+ waterMelon(4));


9

function nextSqaure(n) {
  const anw = 'no';
  if (n === undefined) {
    return anw;
  }
  const res = Math.sqrt(n);
  const res1 = res + 1;
  const result = res1 * res1;
  if (Number.isInteger(result) === false) { //정수이면
    return anw;
  }
  return result;
}

console.log(nextSqaure());    // no
console.log(nextSqaure(0));   // 1
console.log(nextSqaure(1));   // 4
console.log(nextSqaure(2));   // no
console.log(nextSqaure(3));   // no
console.log(nextSqaure(121)); // 144
console.log(nextSqaure(165)); // no
console.log(nextSqaure(400)); // 441

10

function getMaxValueFromArray(array) {
  const max = Math.max.apply(null, array); // 3
  return max;
}
console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7

function getMinValueFromArray(array) {
  const min = Math.min.apply(null, array); // 3
  return min;
}
console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5
