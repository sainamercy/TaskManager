function TaskItem({ task }) {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <div>priority:{task.priority}</div>
      <div>status:{task.status}</div>
    </div>
  );
}

export default TaskItem;
