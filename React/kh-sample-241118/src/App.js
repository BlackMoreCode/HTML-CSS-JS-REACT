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
    </>
  );
}

export default App;
