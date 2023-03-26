import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return <div className="main">
    <Navbar/>
    {/* <Home/> */}
    {/* <Signup/> */}
    <Login/>
  </div>;
}

export default App;
