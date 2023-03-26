// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { API_URL } from "../constants";
// import { useNavigate } from "react-router-dom";

function Signup() {
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
        Sign up to get sarted
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

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        placeholder="eg. Jane Doe"
        // className=""
        // value={full_name}
        // onChange={(e) => setFullName(e.target.value)}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        className=""
        // value={password}
        // onChange={(e) => setPassword(e.target.value)}
      />

      <button className="btn">sign up</button>
      <p>
        Already have an account?{" "}
        <a href="#" className="formLink">
          sign in here
        </a>
      </p>
    </form>
  );
}

export default Signup;
