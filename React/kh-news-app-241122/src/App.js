// import { useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [data, setData] = useState(null);
//   const onClick = async () => {
//     try {
//       const response = await axios.get(
//         "https://newsapi.org/v2/top-headlines?country=us&apiKey=3c00fd60d124498f93c5546bad7cb91f"
//       );
//       setData(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
//     </div>
//   );
// };

// export default App;

import News from "./pages/news";

function App() {
  return (
    <>
      <News />
    </>
  );
}

export default App;
