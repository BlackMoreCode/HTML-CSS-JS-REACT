import { useState, useEffect } from "react";

const InfoEffect = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
    console.log({ name, nickname });
  }, [name]);

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeNickname = (event) => {
    setNickname(event.target.value);
  };

  return (
    <>
      <input value={name} onChange={onChangeName} />
      <input value={nickname} onChange={onChangeNickname} />
      <br />
      <p>이름 : {name}</p>
      <p>닉네임 : {nickname}</p>
    </>
  );
};
export default InfoEffect;
