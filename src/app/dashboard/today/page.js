"use client";
import { useState } from "react";
import TaskModal from "@/app/component/TaskModal";
import TaskForm from "@/app/component/TaskForm";
import TaskList from "@/app/component/TaskList";

export default function Today() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Database create for company",
      completed: false,
    },
    {
      id: 2,
      title: "Smth task",
      completed: false,
    },
  ]);
  const addNewTask = (task) => setTasks([...tasks, task]);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [selectedTasck, setSelectedTask] = useState({ task: {}, index: "" });

  const changeTaskComplete = (index) => {
    const changeTasks = [...tasks];
    changeTasks[index].completed = !changeTasks[index].completed;
    setTasks(changeTasks);
  };

  const openTaskModal = (taskIndex) => {
    setIsTaskModalOpen(true);
    const newSelectedTask = { task: tasks[taskIndex], index: taskIndex };
    setSelectedTask(newSelectedTask);
  };

  const closeTaskModal = () => setIsTaskModalOpen(false);

  const saveTask = (saveTask) => {
    const changeTasks = [...tasks];
    changeTasks[selectedTasck.index] = { ...saveTask };
    setTasks(changeTasks);
    closeTaskModal();
  };

  const deleteTask = () => {
    setTasks(tasks.filter((t) => t.id !== selectedTasck.task.id));
    closeTaskModal();
  };

  return (
    <div className="flex justify-between h-full items-stretch gap-[21px]">
      <div className="flex justify-between gap-8 grow">
        <div className="grow">
          <h2 className="text-[42px] font-semibold mb-8">Today</h2>
          <div>
            <TaskForm add={addNewTask} />
            <TaskList
              tasks={tasks}
              changeTaskComplete={changeTaskComplete}
              openTaskModal={openTaskModal}
            />
          </div>
        </div>
      </div>
      {/*  модалка задачи  */}
      {isTaskModalOpen && (
        <TaskModal
          task={selectedTasck.task}
          closeTaskModal={closeTaskModal}
          saveTask={saveTask}
          deleteTask={deleteTask}
        />
      )}
    </div>
  );
}
