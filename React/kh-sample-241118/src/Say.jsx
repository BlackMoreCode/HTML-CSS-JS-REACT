import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  box-sizing: border-box;
  width: 150px;
  padding: 10px 20px;
  border-radius: 8px;
  color: white;
  font-size: 1.4em;
  font-weight: bold;
  background-color: ${(props) => props.color || "black"};
  transition: all 0.1s ease-in;
  &:hover {
    color: #aaa;
    cursor: pointer;
  }
  &:active {
    transform: translateY(2px);
  }
`;

const Say = () => {
  const [message, setMessage] = useState("");
  const [value, setValue] = useState("");
  // const onClickEnter = () => setMessage("안녕하세요");
  // const onClickLeave = () => setMessage("아리베 데르치");
  const onClickMessage = (msg) => setMessage(msg);

  return (
    <Container>
      {/* <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button> */}
      {/* 이렇게 하면 조금 더 간략화. */}
      <ButtonContainer>
        <Button onClick={() => onClickMessage("안녕하세요")}>입장</Button>
        <Button onClick={() => onClickMessage("아리베 데르치")}>퇴장</Button>
      </ButtonContainer>
      <h1 style={{ color: value }}>{message}</h1>
      <ButtonContainer>
        <Button color="red" onClick={() => setValue("red")}>
          빨간색
        </Button>
        <Button color="green" onClick={() => setValue("green")}>
          초록색
        </Button>
        <Button color="blue" onClick={() => setValue("blue")}>
          파란색
        </Button>
      </ButtonContainer>
    </Container>
  );
};
export default Say;
