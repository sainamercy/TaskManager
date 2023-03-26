// import axios from "axios";
// import { useState } from "react";
// import { API_URL } from "../constants";
// import { useNavigate } from "react-router-dom";


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
      <p>Select Priority</p>

      {priorities.map(({ id, name }) => (
        <div className="" key={id}>
          <input
            className=""
            type="radio"
            name={"priority"}
            id={name}
            value={id}
            checked={currentValue === id}
            // onChange={() => setPriority(id)}
          />
          <label
            className=""
            htmlFor={name}
          >
            {name.toLowerCase()}
          </label>
        </div>
      ))}
    </div>
  );
};

function NewTask() {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [priority, setPriority] = useState(0);
//   const [due, setDueDate] = useState("");
//   const { user } = useAuthContext();
//   const navigate = useNavigate();

//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

  return (
      <form
        // onSubmit={handleSubmit}
        className="newTaskForm form"
      >
        <label>
            Title:
        </label>
    <input type="text" />
          <label htmlFor="title" className="">
            Description:
          </label>
          <textarea
            rows="4" cols="50"
            placeholder="What would you like to do?"
            className=""
            // value={description}
            // onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="title" className="">
            Due Date
          </label>
          <input
            type="datetime-local"
            className=""
            // value={due}
            // onChange={(e) => setDueDate(e.target.value)}
          />
          <Priority
            // currentValue={priority}
            // setPriority={(value) => setPriority(value)}
          />

          <button
            className="btn"
            type="submit"
          >
            Submit
          </button>
      </form>
  );
}

export default NewTask;