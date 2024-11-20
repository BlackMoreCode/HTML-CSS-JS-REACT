import { useState, useEffect } from "react";

const TodoList = () => {
  const [names, setNames] = useState(() => {
    // Try to retrieve names from localStorage, or use the initial array if not present
    const storedNames = localStorage.getItem("names");
    return storedNames
      ? JSON.parse(storedNames)
      : [
          { id: 1, text: "HTML 연습" },
          { id: 2, text: "CSS 복습" },
          { id: 3, text: "자바스트립트 이해" },
          { id: 4, text: "리액트프로젝트" },
        ];
  });

  useEffect(() => {
    localStorage.setItem("names", JSON.stringify(names));
  }, [names]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);
  const onChange = (event) => setInputText(event.target.value);
  const onClick = () => {
    // const nextNames = names.concat({});
    const nextNames = [...names, { id: nextId, text: inputText }];
    setNextId(nextId + 1); //id 값을 갱신 = 증가 시킴
    setNames(nextNames); // todolist 갱신
    setInputText(""); // 인풋필드 초기화
  };

  const onRemove = (id) => {
    // 조건에 맞는 요소만 반환 받아서 새로운 배열 생성
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>
        {names &&
          names.map((name) => (
            <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
              {name.text}
            </li>
          ))}
      </ul>
    </>
  );
};
export default TodoList;
