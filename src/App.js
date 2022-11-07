import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Fac from "./pages/404page";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fac" element={<Fac />} />
      </Routes>
    </Router>
  );
}

export default App;
