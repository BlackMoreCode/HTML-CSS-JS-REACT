import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useContext } from "react";
import { Container, StyledInput, StyledButton } from "../styles/CommonStyle";
import { UserContext } from "../context/UserStore";

const Login = () => {
  //키보드 입력에 대한 상태 관리
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  // 간단한 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);

  const navigate = useNavigate(); // 페이지 이동을 위한 객체 생성
  const btnRef = useRef(null);

  //useContext 훅으로 우리가 만든 UserContext의 전역 상태값에 접근
  const context = useContext(UserContext);
  const { setUserId, setPassword, color } = context;

  const onChangeId = (e) => {
    setInputId(e.target.value);
    setUserId(e.target.value);
    e.target.value.length >= 5 ? setIsId(true) : setIsId(false);
  };

  const onChangePw = (e) => {
    setInputPw(e.target.value);
    e.target.value.length >= 5 ? setIsPw(true) : setIsPw(false);
  };

  const onClickLogin = () => {
    // axios 비동기 통신 호출
    // 그리고 결과 수신. 현재 예시는 서버 통신이 없으니 다르게..
    setUserId(inputId);
    setPassword(inputPw);
    if (inputId === "doch9" && inputPw === "aaaa11") {
      navigate("/home");
    } else {
      alert("아이디 또는 PW가 틀립니다.");
    }
  };

  return (
    <Container>
      <StyledInput
        value={inputId}
        placeholder="ID 입력"
        onChange={onChangeId}
      />
      <br />
      <StyledInput
        value={inputPw}
        placeholder="PW 입력"
        onChange={onChangePw}
      />
      <br />

      {isId && isPw ? (
        <StyledButton onClick={onClickLogin}>확인</StyledButton>
      ) : (
        <StyledButton disabled onClick={onClickLogin}>
          확인
        </StyledButton>
      )}
    </Container>
  );
};
export default Login;
