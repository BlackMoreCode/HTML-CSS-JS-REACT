// 컴포넌트는 함수형 컴포넌트와 클래스형 컴포넌트가 있음.
// 현재는 함수형 컴포넌트만 사용
// 이전에는 상태관리 및 생명주기 관리를 위해서 클래스형을 사용했지만
// v16.8 이후 부터는 상태관리와 생명주기가 관리가 가능해짐.
import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>+1</button>
      <button onClick={() => setNumber(number - 1)}>-1</button>
    </>
  );
};

// const Counter = () => {
//   //위를 만약 풀어서 구현 시도시...
//   // 이 경우 업뎃은 되도 화면 리 렌더링시 number 가 0으로 돌아간다.
//   let number = 0;
//   const setNumber = () => {
//     number += 1;
//     console.log(number); // 콘솔로 볼 때 number 증가가 보여도 화면은 안바뀐다.
//   };

//   return (
//     <>
//       <h1>{number}</h1>
//       <button onClick={setNumber}>+1</button>
//     </>
//   );
// };

export default Counter;
