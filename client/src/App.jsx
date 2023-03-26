import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NewTask from "./pages/NewTask";

function App() {
  return <div className="main">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/newtask" element={<NewTask/>}/>
    </Routes>
  </div>;
}

export default App;
