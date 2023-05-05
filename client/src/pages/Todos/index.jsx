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
