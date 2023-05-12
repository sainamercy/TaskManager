import TaskItem from "./TaskItem";

function TaskGroup({ title, description }) {
  const titleColor = () => {
    if (title === "Todo") {
      return "red circle";
    } else if (title === "Ongoing") {
      return "orange circle";
    } else {
      return "green circle";
    }
  };
  return (
    <div className="taskGroup">
      <div className="taskTitle">
        <div className={titleColor()}></div>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
      <div className="task-items">
        <TaskItem priority="High" status="Done" title="Task 1" />
        <TaskItem priority="High" status="Done" title="Task 1" />
      </div>
    </div>
  );
}
export default TaskGroup;
