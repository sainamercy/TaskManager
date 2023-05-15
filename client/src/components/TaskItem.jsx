import { useState } from "react";
import network from "../utils/network";
function TaskItem({ task }) {
  const [showDetails, setShowDetail] = useState(false);
  const handleShowDetails = () => {
    setShowDetail(!showDetails);
  };
  const deleteTask = () => {
    network.deleteTask(task.id);
    window.location.reload();
  };

  return (
    <div className="task-item">
      <div className="task-header">
        <h3>{task.title}</h3>
        <i
          className={`fa-solid ${
            showDetails ? "fa-chevron-up" : "fa-chevron-down"
          }`}
          onClick={handleShowDetails}
        ></i>
      </div>
      {showDetails && <p>{task.description}</p>}
      <p>priority: {task.priority}</p>
      <p>Move to: {task.status}</p>
      <div className="task-header">
        <button className="btn  task-btn">Edit</button>
        <button className="btn  task-btn" onClick={deleteTask}>
          delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
