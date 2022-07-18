import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="container">
        <h1>Hello World</h1>
      </div>
    </>
  );
}

export default App;
