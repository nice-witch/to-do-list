"use client";
import { useState, useEffect } from "react";
import TaskServer from "@/app/API/TaskServer";
import TaskModal from "@/app/component/TaskModal";
import TaskForm from "@/app/component/TaskForm";
import TaskList from "@/app/component/TaskList";

export default function Today() {
  const [tasks, setTasks] = useState([]);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [selectedTasck, setSelectedTask] = useState({ task: {}, index: "" });
  const [isTasksLoading, setIsTasksLoading] = useState(false);

  const addNewTask = (task) => setTasks([...tasks, task]);

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

  async function fetchTasks() {
    setIsTasksLoading(true);
    const tasksResponse = await TaskServer.getAll();
    setTasks(tasksResponse);
    setIsTasksLoading(false);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="flex justify-between h-full items-stretch gap-[21px]">
      <div className="flex justify-between gap-8 grow">
        <div className="grow h-full overflow-hidden">
          <h2 className="text-[42px] font-semibold mb-8">Today</h2>
          <div className="h-full">
            <TaskForm add={addNewTask} />
            {isTasksLoading ? (
              <p>Loading...</p>
            ) : (
              <TaskList
                tasks={tasks}
                changeTaskComplete={changeTaskComplete}
                openTaskModal={openTaskModal}
              />
            )}
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
