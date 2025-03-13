import Task from "@/app/component/Task";

export default function TaskList({ tasks, changeTaskComplete, openTaskModal }) {
  if (!tasks.length) {
    return <p className="mt-3 text-center">Ups... Tasks not found</p>;
  }

  return (
    <div>
      {tasks.map((task, index) => (
        <Task
          key={task.id}
          task={task}
          index={index}
          changeTaskComplete={changeTaskComplete}
          openTaskModal={openTaskModal}
        />
      ))}
    </div>
  );
}
