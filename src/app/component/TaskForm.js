import { useState } from "react";
import MyInput from "@/app/ui/input/MyInput";
import MyButton from "@/app/ui/button/MyButton";

export default function TaskForm({ add }) {
  const [newTask, setNewTask] = useState("");

  const addNewTask = (event) => {
    event.preventDefault();

    const task = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };
    add(task);
    setNewTask("");
  };

  return (
    <form className="flex gap-[15px] mb-2">
      <MyInput
        px="3.5"
        py="4"
        placeholder="Add New Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <MyButton classes="px-3.5 py-4 bg-amber-300" onClick={addNewTask}>
        Add
      </MyButton>
    </form>
  );
}
