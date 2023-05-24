import { Link } from "react-router-dom";
import { isUserLoggedIn } from "../../utils/auth";

function Home() {
  return (
    <div className="mainTitle">
      <div>
        <h1>
          <span className="highlight">Conquer</span> your day with
          <span className="highlight">TaskBit</span>
        </h1>
        <h4>
          A simple and user-friendly app designed to help you stay on top of
          your tasks and increase your productivity.{" "}
        </h4>
        {isUserLoggedIn() ? (
          <Link to="/todos">
            <button className="btnText">See your tasks &rarr;</button>
          </Link>
        ) : (
          <Link to="/signup">
            <button className="btnText">Get Started &rarr;</button>
          </Link>
        )}
      </div>
      <div>
        <img
          src="https://www.taskopad.com/wp-content/uploads/2021/05/Easier-task-assignment.png"
          className="mainImg"
          alt="home image"
        />
      </div>
    </div>
  );
}

export default Home;
