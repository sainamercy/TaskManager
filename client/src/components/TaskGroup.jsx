import TaskItem from "./TaskItem";
import { useState } from "react";

function TaskGroup({ groupTitle, groupDescription, todos }) {
  const [showTasks, setShowTasks] = useState(false);

  const handleShowTasks = () => {
    setShowTasks(!showTasks);
  };
  const titleColor = () => {
    if (groupTitle === "Todo") {
      return "red circle";
    } else if (groupTitle === "Ongoing") {
      return "orange circle";
    } else {
      return "green circle";
    }
  };

  return (
    <div className="taskGroup">
      <div className="headercont">
        <div className="taskTitle">
          <div className={titleColor()}></div>
          <h3>{groupTitle}</h3>
        </div>
        <i
          className={`fa-solid arrow arrow-task-group ${
            showTasks ? "fa-chevron-up" : "fa-chevron-down"
          }`}
          onClick={handleShowTasks}
        ></i>
      </div>
      <p>{groupDescription}</p>
      <div className={`task-items ${!showTasks && "hidden"}`}>
        {todos.length === 0 ? (
          <p className="no-tasks task-item">No tasks yet!</p>
        ) : (
          todos?.map((task) => <TaskItem key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
}
export default TaskGroup;
