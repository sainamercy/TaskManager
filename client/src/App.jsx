import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return <div className="main">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
  </div>;
}

export default App;
