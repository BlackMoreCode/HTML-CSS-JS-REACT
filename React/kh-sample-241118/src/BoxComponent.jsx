import styled from "styled-components";

const BoxStyle = styled.div`
  border: 1px solid black;
  padding: 10px;
  width: 300px;
  background-color: royalblue;
  color: white;
  font-size: 1.4em;
  text-align: center;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const BoxComponent = ({ children }) => {
  return <BoxStyle>{children}</BoxStyle>;
};
export default BoxComponent;
