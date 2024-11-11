// 자바스크립트의 데이터 타입은 원시 타입과 객체 타입으로 나뉨.
// 원시 타입은 값 자체가 저장되는 방식 : String, Number, Boolean, Undefined, Null, Symbol, BigInt
// 객체 타입은 객체의 메모리 주소를 저장하는 타입: Object, Array, Function...

// 문자열: 문자열은 길이가 16bit(2byte)인 문자(UTF-16)를 나열한 상태. "",'',``
let str = "자바스크립트";
console.log(str);

// 템플릿 문자열 / template literal : ES6에서 추가된 방식
let dan = 3;
let gugu = 8;
console.log(`${dan} x ${gugu} = ${dan * gugu}`);

// 숫자형(Number) : js는 모든 숫자를 하나의 숫자형(Number)로 다룬다.
// 실수는 부동 소수점으로 표현.
// let x = 0.0;
// for (i = 0; i < 100; i++) {
//   x += 0.01;
// }
// console.log(x);

const Decimal = require("decimal.js");
let x = new Decimal(0.0);
for (i = 0; i < 100; i++) {
  x = x.plus(0.01);
}
console.log(x);

// 논리형/boolean : 참과 거짓의 값만 가지는 타입
let age = 18;
let isAdult = age > 19 ? true : false;
if (isAdult) console.log("성인");
else console.log("미성년자");

// undefined: 값이 할당되지 않음을 의미
let empty;
console.log(empty);

// null: 변수나 상수를 선언하고 의도적으로 값을 비워둘 때 사용
let empty2 = null;
console.log(empty2);
