import "./App.css";
import JsxSyntax from "./jsx.문법";
import GreetingComponent from "./greetingComponent";
import WelcomeProps from "./WelcomeProps";
import Articles from "./Articles";
import MyComponent from "./MyComponent";
import BoxComponent from "./BoxComponent";
import Counter from "./ClassComponent";
import Say from "./Say";
import Clock from "./Clock";
import EventPractice from "./EventPractice";
import DropDownComponent from "./DropDownComponent";
import RadioButton from "./RadioButton";
import TableMap from "./TableMap";
import UserList from "./UserList";
import TodoList from "./TodoList";
import USPrac from "./USPrac";
import InfoEffect from "./InfoEffect";
import ReducerCnt from "./ReducerState";
import Average from "./Average";
import CreateRef from "./RefEx1";
import MaintainInnerValue from "./RefEx2";

const productInfo = {
  date: "2024-09-01",
  product: "iPhone 16 Pro",
};

function App() {
  return (
    <>
      <Say></Say>
      <Clock></Clock>
      <EventPractice></EventPractice>
      <RadioButton></RadioButton>
      <TableMap></TableMap>
      <UserList></UserList>
      <TodoList></TodoList>
      <USPrac></USPrac>
      <InfoEffect></InfoEffect>
      <ReducerCnt></ReducerCnt>
      <Average></Average>
      <CreateRef></CreateRef>
      <MaintainInnerValue></MaintainInnerValue>
    </>
  );
}

export default App;
