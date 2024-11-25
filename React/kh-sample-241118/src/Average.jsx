import { useState, useMemo, useCallback } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산중");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length; // 결과값 평균 반환
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number)); // 입력 받은 값을 정수로 변경
    setList(nextList); //새로 만들어진 배열로 선택 변경
    setNumber(""); //입력창 비우기
  }, [list, number]);

  const avg = useMemo(() => getAverage(list), [list]); // useMemo 써서 불필요한 리렌더링 방지

  return (
    <>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>{list && list.map((val, index) => <li key={index}>{val}</li>)}</ul>
      <p>평균 값 : {avg}</p>
    </>
  );
};
export default Average;
