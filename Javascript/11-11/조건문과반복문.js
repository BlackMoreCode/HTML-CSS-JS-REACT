//  자바스크립트의 조건문은 if, if ~ else if else, switch ~ case
// 반복문은 while, do ~ while, for(초기값;최종조건;증감값), for ~ in (객체반복)
// for ~ of (iterable 객체를 순회시 사용)

const brands = ["애플", "구글", "테슬라", "엔비디아", "아마존"];

// 기본 for문 순회 방식
for (let i = 0; i < brands.length; i++) {
  console.log(brands[i]);
}

// for ~ of 순회 방식; 이터러블 객체 (e.g. 배열)를 반복 순회
for (let e of brands) {
  console.log(e);
}
// for ~ in : 객체의 속석을 반복하는데 사용
const person = {
  name: "마이클 잭슨",
  age: 50,
  addr: "USA",
};

for (const key in person) {
  console.log(person[key]);
}
