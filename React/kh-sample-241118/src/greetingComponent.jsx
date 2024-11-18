import "./App.css";

const member = {
  name: "곰돌이사육사",
  job: "Developer",
  addr: "경기도 수원시",
  gender: "남성",
};

const getGreeting = (user) => {
  return user ? <h1>환영합니다. {user}님.</h1> : <h1>환영합니다. 방문자님</h1>;
};

// class 선택자는 class가 아니고 className으로 변경된다.
// JSX문법에서 태그는 닫힘 태그 역시 필요하다
const GreetingComponent = () => {
  return (
    <div className="App">
      <p className="title-name">제 이름은 {member.name}</p>
      <p className="title-name">직업은 {member.job}</p>
      <p className="title-name">주소는 {member.addr}</p>
      <p className="title-name">성별은 {member.gender}</p>
      <hr />
      <p>{getGreeting(member.name)}</p>
    </div>
  );
};

export default GreetingComponent;
