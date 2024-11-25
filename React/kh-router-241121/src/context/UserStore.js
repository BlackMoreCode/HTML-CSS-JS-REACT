import { createContext, useState } from "react";
export const UserContext = createContext(null); // 상태관리를 위한 컨텍스트 생성

const UserStore = (props) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [color, setColor] = useState("white");

  return (
    <UserContext.Provider
      value={{
        userId,
        setUserId,
        password,
        setPassword,
        color,
        setColor,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserStore;
