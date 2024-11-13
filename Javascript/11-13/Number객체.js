// Number 객체 : 숫자와 관련된 작업; JS에선 정수와 실수를 전부 Number로 처리

const x = 10;
console.log(typeof x);

const y = 3.14;
console.log(typeof y);

// Number.parseFloat(): 주어진 문자열을 실수로 변환
Number.parseFloat("!2"); //12
Number.parseFloat("!2.34"); //12.34
Number.parseFloat("12문자열"); // 12
Number.parseFloat("12 34 56"); // 12
Number.parseFloat("문자열12"); // NaN

//Number.parseInt(): 주어진 문자열을 정수로 변환
console.log(Number.parseInt("12.34"));
