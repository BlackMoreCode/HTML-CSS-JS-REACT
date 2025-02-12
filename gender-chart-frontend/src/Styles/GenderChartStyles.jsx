// GenderChartStyles.jsx
import styled from "styled-components";

// 전체 컨테이너 스타일 정의
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  background-color: #fff;
  min-width: 500px;
  max-width: 900px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: 30px auto;
`;

// 인풋 및 버튼을 감싸는 컨테이너 스타일 정의
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px; /* 버튼 사이의 간격 */
`;

// 인풋 스타일 정의
export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 300px;
  font-size: 16px;
`;

// 버튼 스타일 정의
export const Button = styled.button`
  padding: 0px 20px;
  margin: 5px;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;
