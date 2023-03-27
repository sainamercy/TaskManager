import { Link } from "react-router-dom";
function Login() {
    //   const [email, setEmail] = useState("");
    //   const [password, setPassword] = useState("");
    //   const [full_name, setFullName] = useState("");
    //   const [isLoading, setIsLoading] = useState(false);
  
    //   const navigate = useNavigate();
  
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
  
    //     //TODO:: Handle validation
    //     const details = {
    //       email,
    //       password,
    //       full_name,
    //     };
  
    //     setIsLoading(true);
  
    //     axios
    //       .post(`${API_URL}/auth/register`, details)
    //       .then((response) => {
    //         localStorage.setItem("user", JSON.stringify(response.data.data));
    //         navigate("/tasklist");
    //       })
    //       .catch((error) => {
    //         // TODO: handle error
    //       })
    //       .finally(() => {
    //         setIsLoading(false);
    //       });
    //   };
  
    return (
      <form
        className="form"
        // onSubmit={handleSubmit}
      >
        <h4 className="">
          {/* {isLoading ? "Getting  you onboard" : "Sign up to get sarted "} */}
          Login to see your tasks
        </h4>
        <label htmlFor="Email">Email:</label>
        <input
          type="text"
          name="email"
          placeholder="eg. janedoe@gmail.com"
          className=""
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          className=""
          // value={password}
          // onChange={(e) => setPassword(e.target.value)}
        />
  
        <button className="btn">login</button>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="formLink">
            sign up here
          </Link>
        </p>
      </form>
    );
  }
  
  export default Login;