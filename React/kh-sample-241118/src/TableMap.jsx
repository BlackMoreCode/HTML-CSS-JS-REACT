import { useState, useEffect } from "react";
import styled from "styled-components";

const Table = styled.table`
  border-collapse: collapse;
  background-color: bisque;
  th,
  td {
    border: 1px solid #ccc;
    padding: 4px 8px;
  }
  th {
    background-color: royalblue;
    color: white;
  }
`;

const responseData = [
  {
    id: 1,
    name: "민지",
    addr: "신사동",
  },
  {
    id: 2,
    name: "하나",
    addr: "역삼동",
  },
  {
    id: 3,
    name: "혜린",
    addr: "청담동",
  },
  {
    id: 4,
    name: "다니엘",
    addr: "논현동",
  },
  {
    id: 5,
    name: "혜인",
    addr: "개포동",
  },
];

const TableMap = () => {
  const [memberData, setMemberData] = useState([]);

  useEffect(() => {
    //서버와 비동기 통신 일어남
    setMemberData(responseData);
  }, []);

  const handleTableRowClick = (item) => {
    console.log(item);
  };

  return (
    <Table>
      <tr>
        <th>ID</th>
        <th>이름</th>
        <th>주소</th>
      </tr>
      {memberData &&
        memberData.map((member, index) => (
          <tr key={index} onClick={() => handleTableRowClick(member)}>
            <td>{member.id}</td>
            <td>{member.name}</td>
            <td>{member.addr}</td>
          </tr>
        ))}
    </Table>
  );
};
export default TableMap;
