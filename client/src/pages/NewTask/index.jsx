// import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { API_URL } from "../constants";
import { useNavigate } from "react-router-dom";

const Priority = ({ currentValue, setPriority }) => {
  let priorities = [
    {
      id: 0,
      name: "LOW",
    },
    {
      id: 1,
      name: "MEDIUM",
    },
    {
      id: 2,
      name: "HIGH",
    },
  ];

  return (
    <div className="">
      <p>Select Priority:</p>

      {priorities.map(({ id, name }) => (
        <div className="" key={id}>
          <input
            className=""
            type="radio"
            name={"priority"}
            id={name}
            value={id}
            defaultChecked={currentValue === id}
            required
            onChange={() => setPriority(id)}
          />
          <label className="" htmlFor={name}>
            {name.toLowerCase()}
          </label>
        </div>
      ))}
    </div>
  );
};

function NewTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(0);
  //   const { user } = useAuthContext();
  const navigate = useNavigate();

  //   const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description, priority);
    navigate("/todos");
  };
  return (
    <form onSubmit={handleSubmit} className="newTaskForm form">
      <div className="addHead">
        <h3>Add New Task!</h3>
        <div className="exit">
          <Link to="/todos" className="nav__link">
            x
          </Link>
        </div>
      </div>
      <label>Title:</label>
      <input
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="title" className="">
        Description:
      </label>
      <textarea
        rows="4"
        cols="50"
        placeholder="What would you like to do?"
        className=""
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Priority
        currentValue={priority}
        setPriority={(value) => setPriority(value)}
      />

      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default NewTask;
