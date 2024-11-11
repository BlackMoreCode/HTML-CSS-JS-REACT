// 자바스크립트는 원시 타입을 제외하면 모든 데이터 타입이 객체
// 객체 타입에는 배열, 객체 리터럴, 함수 등이 있음
// 배열: 복수의 데이터를 정의 할 수 있는 자료형, 인덱스 기반

let score = [80, 99, 77, 65];
console.log(score[1]); // 인덱스를 가지고 값을 찾을 수 있다

// 자바스크립트의 배열은 데이터 타입이 달라도 됨 (자바에서는 안됬다)
let array = ["JOJO", "DIO", 21, true, [99, 88, 60], ["Mikan", "Yuki", "Rito"]];
console.log(array[5][0]);

// 객체 리터럴(오브젝트): 객체를 정의하는 가장 간단한 방법, 중괄호 사용 {}
let memberInfo = {
  name: "Kira",
  age: 30,
  addr: "Morio-cho",
  score: [99, 88, 77],
  getInfo: function () {
    const avg = (this.score[0] + this.score[1] + this.score[2]) / 3;
    return `이름: ${this.name}, 나이: ${this.age}, 주소: ${this.addr}, 성적: ${avg}`;
  },
};

console.log(memberInfo.getInfo());

// 비교 연산자: JS 에서는 동등연산자(==) 와 일치 연산자(===)가 있다.
console.log(1 == "1"); // 동등연산자는 이걸 true 반환; 값이 같은지 확인.
console.log(1 === "1"); // 일치 연산자는 자료형이 다르기 때문에 false를 반환. 값과 자료형을 둘 다 확인.

console.log(1 !== "1"); // true;

//형변환: 묵시적/명시적 형 변환
let num1 = 10 + "10"; //1010, 숫자와 문자열을 결합시 문자열로 자동 형 변환.
console.log(num1);

let num2 = 10 + Number("10"); //명시적 형변환
console.log(num2);

let num3 = 10 + String(10); //명시적 형변환과 묵시적 형변환이 동시에 일어난다.
console.log(num3);
