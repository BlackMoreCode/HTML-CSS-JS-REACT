// 시간과 분을 입력하면  45분 일찍 시간이 설정 되도록 변경하는 프로그램 작성
// 시간은 24시간제, 0시 30분 => 23시 45분으로 나오도록
// parseInt() 문자열을 정수로 반환

// 내가 시도한 방식
// 입력 받기
let h = parseInt(prompt("시 입력 (0-23):"));
let m = parseInt(prompt("분 입력 (0-59):"));

// 원래 시간 저장
let originalH = h;
let originalM = m;

// 알람 시간 계산
if (m < 45) {
  if (h === 0) {
    h = 23;
  } else {
    h -= 1;
  }
  m += 60;
}

let alarmM = m - 45; // 알람 시간에서 45분 빼기

// 결과 출력
document.write("입력한 시간: " + originalH + "시 " + originalM + "분<br>");
document.write("알람으로 설정된 시간: " + h + "시 " + alarmM + "분");

//방식 2
let hour = Number(prompt("시간 입력: ", ""));
let min = Number(prompt("분 입력:", ""));
let totalMin = hour * 60 + min;
if (totalMin < 45) totalMin = 24 * 60 + min;
totalMin -= 45;
hour = parseInt(totalMin / 60);
min = totalMin % 60;
document.write("<h2>" + `${hour}시 ${min}분` + "</h2>");
