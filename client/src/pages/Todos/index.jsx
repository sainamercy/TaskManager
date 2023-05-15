import TaskGroup from "../../components/TaskGroup";
import { Link, useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../../utils/auth";
import { useEffect, useState } from "react";
import network from "../../utils/network";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Todos({ user }) {
  // const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  // // form data
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [status, setStatus] = useState(0);
  // const [priority, setPriority] = useState(0);
  // const [todoId, setTodoId] = useState(null);
  const navigate = useNavigate();

  const getTodos = async () => {
    setLoading(true);
    if (user) {
      try {
        const response = await network.getTasks();
        console.log(response.data.data);
      } catch (err) {
        // toast.error(JSON.stringify(err.message));
        console.log(err.message);
      }
      setLoading(false);
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div className="todos">
      {/* todos nav */}
      <ToastContainer />
      <div className="todosNav">
        <nav className="nav">
          <Link to="/todos" className="nav__link">
            Task List
          </Link>
          <ul className="nav__links">
            <li className="nav__item">
              <Link className="nav__link" to="/newtask">
                + Add new task
              </Link>
            </li>
            <li className="nav__item">{user || "Guest"}</li>
          </ul>
        </nav>
      </div>
      {/* main sec */}
      <div className="todosCont">
        <TaskGroup
          title={"Todo"}
          description={"This item hasn't been started"}
        />
        <TaskGroup
          title={"Ongoing"}
          description={"This is actively being worked on"}
        />
        <TaskGroup
          title={"Completed"}
          description={"This has been completed"}
        />
      </div>
    </div>
  );
}

export default Todos;
