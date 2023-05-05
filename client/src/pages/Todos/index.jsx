import { Link } from "react-router-dom";
import TaskGroup from "../../components/TaskGroup";
function Todos() {
  return (
    <div className="todos">
      {/* todos nav */}
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
            <li className="nav__item">Mercy Saina</li>
          </ul>
        </nav>
      </div>
      {/* main sec */}
      <div className="todosCont">
        <TaskGroup title={"Todo"} />
        <TaskGroup title={"Ongoing"} />
        <TaskGroup title={"Completed"} />
      </div>
    </div>
  );
}

export default Todos;
