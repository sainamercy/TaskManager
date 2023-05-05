export default function TaskGroup({ title, description }) {
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
    </div>
  );
}
