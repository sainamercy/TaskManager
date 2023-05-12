function TaskItem({ title, priority, status }) {
  return (
    <div className="task-item">
      <h3>{title}</h3>
      <div>priority:{priority}</div>
      <div>status:{status}</div>
    </div>
  );
}

export default TaskItem;
