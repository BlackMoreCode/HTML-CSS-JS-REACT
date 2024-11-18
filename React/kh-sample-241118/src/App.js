import "./App.css";
import JsxSyntax from "./jsx.문법";
import GreetingComponent from "./greetingComponent";
import WelcomeProps from "./WelcomeProps";
import Articles from "./Articles";
import MyComponent from "./MyComponent";
import BoxComponent from "./BoxComponent";

const productInfo = {
  date: "2024-09-01",
  product: "iPhone 16 Pro",
};

function App() {
  return (
    <>
      <MyComponent name="DIO" age={21} />
      <BoxComponent>첫번째 박스</BoxComponent>
      <BoxComponent>두번째 박스</BoxComponent>
      <BoxComponent>세번째 박스</BoxComponent>
    </>
  );
}

export default App;
