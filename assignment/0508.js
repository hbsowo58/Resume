// 1. 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라
var x = 15;
if (10 < x && x < 20) {
  console.log(x);
}

// 2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
for(i=0;i<10;i++){
  if(i%2==0){
      console.log(i);
  }
}

// 3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
var Even = "";
for(i=0;i<10;i++){
  if(i%2==0){
    Even = Even + i;
}
}
console.log(Even);

// 4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
for(i=10;i>0;i--){
  if(i%2==1){
      console.log(i);
  }
}
// 5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
i=0;
while(i<10){
  if(i%2==0){
    console.log(i);
    i++;
  }
  i++;
}
// 6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
i=10;
while(1<=i){
  if(i%2==1){
    console.log(i);
    i--;
  }
  i--;
}
// 7. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.
var sum = 0;
for(i=0;i<10;i++){
    sum = sum +i;
}
console.log(sum);
// 8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
var sum = 0;
for (i=1;i<20;i++){
    if(i%2!==0 && i%3!==0){
        sum = sum +i;
    }
}
console.log(sum);

// 9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
var sum = 0;
for (i=1;i<20;i++){
    if(i%2==0 || i%3==0){
        sum = sum +i;
    }
}
console.log(sum);
// 10. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.

for(i=1;i<=6;i++){
  for(j=1;j<=6;j++){
      if(i+j==6){
          console.log(i,j)
      }
  }
}
// 11. 삼각형 출력하기 - pattern 1 *12345
var star = '';
for ( var i = 0 ; i <= 5 ; i ++){
	for (var j = 0 ; j < i ; j++){
		star = star +'*';
	}	
	star = star +'\n';
}
console.log('방법1');
console.log(star);


console.log('방법2');
for(var star= 1; star <=5; star +=1){
  console.log('*'.repeat(star));
}


// 12. 삼각형 출력하기 - pattern 2 *은 54321, 공백은 01234
console.log('방법1');
for(var i=0; i<5; i++){
  var star ="";
  for(var j=0; j<i; j++){
    star = star+" ";
  }

  for(var j=0; j<5-i; j++){
    star = star+"*";
  }
  console.log(star);
}



console.log('방법2');
for(var star =5; star >=1;star -=1){
  console.log(' '.repeat(5-star)+'*'.repeat(star));
}

for(var i=0; i<5; i++){
  var star = "";
  for(var j=0; j<5; j++){
    if(j<i){
      star = star+" ";
    }
    else {
      star = star+"*";
    }
  }
  console.log('방법3');
  console.log(star);
}



// 13. 삼각형 출력하기 - pattern 3 *54321
var star = '';
for(var i = 0 ; i <= 5; i++){
            star = star +'\n';
            for(var j = i ; j < 5 ; j++){
                star = star +'*';
            }
        }
console.log('방법1');
console.log(star);


console.log('방법2');
for (var star =5; star >=1; star -=1){
  console.log('*'.repeat(star))
}
//14. 삼각형 출력하기 - pattern 4 *12345 공백01234
console.log('방법1');
for(var i=1; i<6; i++){
  var star ="";
	  for(var j=0; j<5-i; j++){
    star = star+" ";
  }	
  for(var j=0; j<i; j++){
    star = star+"*";
  }

  console.log(star);
}


// 15. 정삼각형 출력하기 *13579 공백43210
var layer=5;
var star = '';
for (var i=0; i<layer; i++) {
            for (var j=i; j<layer-1; j++)
				star = star + ' ';
            for (var k=0; k<=(i*2); k++)
				star = star + '*';
  		star= star+'\n'
}
console.log('방법1');
console.log(star);


console.log('방법2')
for (var star = 1; star <=9; star +=2){
  console.log(' '.repeat((9-star)/2) + '*'.repeat(star))
}

// 16. 역정삼각형 출력하기 *97531 공백01234
var layer= 5;
var star = '';
        for (var i=0; i<layer; i++) {
            for (var j=0; j<i; j++)
                star = star + ' ';
            for (var k=0; k<=((layer-i-1)*2); k++)
                star = star + '*';
            star= star+'\n';
        }
console.log('방법1');
console.log(star);




console.log('방법2');
for (var star = 9; star >=1; star -=2){
  console.log(' '.repeat((9-star)/2) + '*'.repeat(star))
}