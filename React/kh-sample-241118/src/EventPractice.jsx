import { useState } from "react";

const EventPractice = () => {
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");

  const changeMsg = (e) => setMessage(e.target.value);
  const onChangeUserName = (e) => setUserName(e.target.value);
  const onClick = () => {
    alert(`${userName} : ${message}`);
    setUserName("");
    setMessage("");
  };

  // Enter Key 입력시 onClick() 호출
  const onKeyPress = (e) => {
    if (e.key === "Enter") onClick();
  };

  return (
    <>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        placerholder="사용자명"
        onChange={onChangeUserName}
        value={userName}
      />
      <input
        type="text"
        placeholder="아무거나 입력"
        onChange={changeMsg} // onChange={(e) => changeMsg(e)} // 다만 이벤트는 관례상 이렇게 써도 된다.
        value={message}
        onKeyDown={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
      <h2>입력 받은 메세지 : {message}</h2>
    </>
  );
};

export default EventPractice;