import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import AxiosApi from "../../api/AxiosApi";
import imgLogo from "../../images/bonk-it.jpg";
import { Container, Items } from "../../components/SignupComponents";
import Button from "../../components/ButtonComponents";
import Input from "../../components/InputComponents";
import Modal from "../../utils/Modal";

const Img = styled.img`
  width: 500px;
  object-fit: cover;
`;

const Login = () => {
  // 키보드 입력
  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");

  // 모달창을 열고 닫기
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창에 대한 문구
  const [modalContents, setModalContents] = useState("");

  const navigate = useNavigate();

  // 유효성 검사
  const [isId, setIsId] = useState("");
  const [isPw, setIsPw] = useState("");

  //모달 창을 닫는 함수
  const closeModal = () => {
    setModalOpen(false);
  };

  //모달창 confirm 동작 함수
  const confirmModal = () => {
    console.log("Confirm 버튼이 눌려졌습니다.");
  };

  // 5~ 20자리의 영문자, 숫자, 언더스코어(_)로 이루어진 문자열이 유효한 아이디 형식인지 검사하는 정규표현식
  const onChangeEmail = (e) => {
    setInputEmail(e.target.value);
    e.target.value.length < 5 ? setIsId(false) : setIsId(true);
  };

  const onChangePw = (e) => {
    setInputPw(e.target.value);
    e.target.value.length < 5 ? setIsPw(false) : setIsPw(true);
  };

  const onClickLogin = async () => {
    try {
      const rsp = await AxiosApi.login(inputEmail, inputPw);
      localStorage.setItem("email", inputEmail);
      localStorage.setItem("isLogin", "TRUE");
      console.log(rsp.data);
      if (rsp.data) {
        navigate("/home");
      } else {
        // alert("아이디 및 패스워드가 틀립니다.");
        setModalOpen(true);
        setModalContents("아이디 또는 패스워드가 일치하지 않습니다.");
      }
    } catch (e) {
      // alert("서버가 응답하지 않습니다.");
      setModalOpen(true);
      setModalContents("아이디 또는 패스워드가 일치하지 않습니다.");
    }
  };

  return (
    <Container>
      <Items className="item1">
        <Img src={imgLogo} alt="Logo" />
      </Items>

      <Items className="item2">
        <Input
          placeholder="이메일"
          value={inputEmail}
          onChange={onChangeEmail}
        />
      </Items>

      <Items className="item2">
        <Input placeholder="패스워드" value={inputPw} onChange={onChangePw} />
      </Items>

      <Items className="item2">
        {isId && isPw ? (
          <Button enabled onClick={onClickLogin}>
            SIGN IN
          </Button>
        ) : (
          <Button disabled>SIGN IN</Button>
        )}
      </Items>

      <Items className="signup" variant="signup">
        <Link to="/Signup" className="link_style">
          <span>Sign Up</span>
        </Link>
      </Items>
      <Modal
        open={modalOpen}
        close={closeModal}
        header="오류"
        type={true}
        confirm={confirmModal}
      >
        {modalContents}
      </Modal>
    </Container>
  );
};
export default Login;
