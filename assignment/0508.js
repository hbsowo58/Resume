// 1. 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라
const x = 15;
if (x > 10 && x < 20) {
  console.log(x);
}

// 2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
let Even = '';
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    Even += i;
  }
}
console.log(Even);


// 4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
for (let i = 10; i > 0; i--) {
  if (i % 2 === 1) {
    console.log(i);
  }
}
// 5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
let i = 0;
while (i < 10) {
  if (i % 2 === 0) {
    console.log(i);
    i += 1;
  }
  i += 1;
}

// 6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
let j = 10;
while (j >= 1) {
  if (j % 2 === 1) {
    console.log(j);
    j -= 1;
  }
  j -= 1;
}

// 7. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.
let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += i;
}
console.log(sum);

// 8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
let sum1 = 0;
for (let i = 1; i < 20; i++) {
  if (i % 2 !== 0 && i % 3 !== 0) {
    sum1 += i;
  }
}
console.log(sum1);


// 9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
let sum2 = 0;
for (let i = 1; i < 20; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    sum2 += i;
  }
}
console.log(sum2);

// 10. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.
for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 6; j++) {
    if (i + j === 6) {
      console.log(i, j);
    }
  }
}

// 11. 삼각형 출력하기 - pattern 1 *12345
let star = '';
for (let i = 0; i <= 5; i++) {
  for (let j = 0; j < i; j++) {
    star += '*';
  }
  star += '\n';
}
console.log(star);
// 12. 삼각형 출력하기 - pattern 2 *은 54321, 공백은 01234
for (let star = 5; star >= 1; star -= 1) {
  console.log(' '.repeat(5 - star) + '*'.repeat(star));
}

// 13. 삼각형 출력하기 - pattern 3 *54321
let star = '';
for (let i = 0; i <= 5; i++) {
  star += '\n';
  for (let j = i; j < 5; j++) {
    star += '*';
  }
}
console.log(star);




//14. 삼각형 출력하기 - pattern 4 *12345 공백01234
for (let i = 1; i < 6; i++) {
  let star = '';
  for (let j = 0; j < 5 - i; j++) {
    star += ' ';
  }
  for (let j = 0; j < i; j++) {
    star += '*';
  }
  console.log(star);
}

// 15. 정삼각형 출력하기 *13579 공백43210
for (let star = 1; star <= 9; star += 2) {
  console.log(' '.repeat((9 - star) / 2) + '*'.repeat(star));
}


// 16. 역정삼각형 출력하기 *97531 공백01234
for (let star = 9; star >= 1; star -= 2) {
  console.log(' '.repeat((9 - star) / 2) + '*'.repeat(star));
}
