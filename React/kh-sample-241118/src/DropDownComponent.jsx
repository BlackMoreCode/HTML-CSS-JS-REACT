import { useState } from "react";

const DropdownComponet = () => {
  const [selectValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  // return (
  //   <>
  //     <h2>드롭다운 예제</h2>
  //     <select value={selectValue} onChange={handleChange}>
  //       <option value="" disabled>
  //         과일을 선택하세요.
  //       </option>
  //       <option value="apple">사과</option>
  //       <option value="banana">바나나</option>
  //       <option value="grape">포도</option>
  //       <option value="watermelon">수박</option>
  //     </select>
  //     <p>선택된 과일 : {selectValue}</p>
  //   </>
  // );

  const fruits = [
    {
      value: "apple",
      text: "사과",
    },
    {
      value: "banana",
      text: "바나나",
    },
    {
      value: "grape",
      text: "포도",
    },
    {
      value: "watermelon",
      text: "수박",
    },
  ];

  return (
    <>
      <h2>드롭다운 예제</h2>
      <select value={selectValue} onChange={handleChange}>
        <option value="" disabled>
          과일을 선택하세요.
        </option>
        <option value={fruits[0].value}>{fruits[0].text}</option>
        <option value={fruits[1].value}>{fruits[1].text}</option>
        <option value={fruits[2].value}>{fruits[2].text}</option>
        <option value={fruits[3].value}>{fruits[3].text}</option>
      </select>
      <p>선택된 과일 : {selectValue}</p>
    </>
  );
};

export default DropdownComponet;
