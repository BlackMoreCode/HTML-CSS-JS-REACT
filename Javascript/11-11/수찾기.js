// 3개의 수를 입력 받아서 가장 큰 수와 작은 수를 화면에 출력하기
// prompt로 입력 받은 값은 문자열 이므로 숫자로 변경하기 위해서는
// Number() 함수로 형 변환을 해야한다.

let x;
let y;
let z;
let maxTarget;
let minTarget;

x = prompt("숫자를 입력하세요", "");
y = prompt("숫자를 입력하세요", "");
z = prompt("숫자를 입력하세요", "");
minTarget = Number(Math.min(x, y, z));
maxTarget = Number(Math.max(x, y, z));

document.write("제일 높은 값 " + maxTarget + "<br>");
document.write("제일 낮은 값" + minTarget);
