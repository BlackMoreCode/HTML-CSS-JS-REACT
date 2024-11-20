import { useState } from "react";
import styled from "styled-components";

const DivBox = styled.div`
  margin: 20px auto;
  border-radius: 20px;
  border: 1px solid #ccc;
  width: 500px;
  height: auto;
  margin-bottom: 20px;
  background-color: bisque;
  color: #0f0f0f;
  font-size: 1.4em;
  display: flex;
  flex-direction: column;
  input,
  button,
  h3,
  ul,
  li {
    margin: 5px 40px;
    text-align: center;
    list-style: none;
  }
`;

const USPrac = () => {
  const [formData, setFormData] = useState({
    name: "",
    compName: "",
    compAddr: "",
    email: "",
    contact: "",
  });

  const [infos, setInfos] = useState([]); // 서브밋된 결과들 저장

  const onChange = (event) => {
    const { name, value } = event.target; // 구조분해 적용 상태로 name, value 로 구분.
    setFormData({
      ...formData,
      [name]: value, // 해당 특정 필드 업데이트
    });
  };

  const onClick = () => {
    setInfos([...infos, formData]); // infos 배열에 현재 form data에 추가
    setFormData({
      name: "",
      compName: "",
      compAddr: "",
      email: "",
      contact: "",
    }); // 폼 필드들 리셋
  };

  return (
    <DivBox>
      <input
        name="name"
        value={formData.name}
        onChange={onChange}
        placeholder="Name"
      />
      <input
        name="compName"
        value={formData.compName}
        onChange={onChange}
        placeholder="Company Name"
      />
      <input
        name="compAddr"
        value={formData.compAddr}
        onChange={onChange}
        placeholder="Company Address"
      />
      <input
        name="email"
        value={formData.email}
        onChange={onChange}
        placeholder="Email"
      />
      <input
        name="contact"
        value={formData.contact}
        onChange={onChange}
        placeholder="Contact"
      />
      <br />
      <button onClick={onClick}>Submit</button>

      <div>
        <h3>Submitted Information:</h3>
        <ul>
          {infos.map((info, index) => (
            <li key={index}>
              <strong>Name:</strong> {info.name} <br />
              <strong>Company Name:</strong> {info.compName} <br />
              <strong>Address:</strong> {info.compAddr} <br />
              <strong>Email:</strong> {info.email} <br />
              <strong>Contact:</strong> {info.contact} <br />
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </DivBox>
  );
};

export default USPrac;
