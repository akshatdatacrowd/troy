import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {

  return (
    <>
      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>  
      </Router>
      
    </>
  );
}

export default App;
