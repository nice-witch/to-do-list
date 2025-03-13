import { useState, useMemo } from "react";
import WrapperGrey from "@/app/component/WrapperGrey";
import MyInput from "../ui/input/MyInput";
import MyButton from "@/app/ui/button/MyButton";

export default function TaskModal({
  task,
  closeTaskModal,
  saveTask,
  deleteTask,
}) {
  const [taskModal, setTaskModal] = useState(task);
  const [description, setDescription] = useState(task.description && "");

  const handlerSaveTask = (event) => {
    event.preventDefault();
    setTaskModal({ ...taskModal, description });
    console.log(taskModal);
    saveTask(taskModal);
  };

  const handleDeleteTask = (event) => {
    event.preventDefault();
    deleteTask();
  };

  useMemo(() => {
    setDescription(task.description && "");
    return setTaskModal(task);
  }, [task]);

  // console.log(task);

  return (
    <WrapperGrey
      title="Task:"
      width="w-96"
      nameIcon="close"
      eventClickIcon={closeTaskModal}
    >
      <form className="flex flex-col justify-between mt-4 grow">
        <div className="flex flex-col gap-3">
          <MyInput
            px="2"
            py="3"
            value={taskModal.title}
            onChange={(e) =>
              setTaskModal({ ...taskModal, title: e.target.value })
            }
          />
          <textarea
            value={description}
            placeholder="Description"
            rows="5"
            className="w-full px-2 py-3 text-neutral-500 border border-neutral-200 rounded-lg bg-transparent focus:outline-0"
            onChange={(e) => setDescription(e.target.value)}
          >
            {description}
          </textarea>
        </div>

        <div className="flex items-stretch gap-4">
          <MyButton
            classes="py-3 w-full bg-transparent border border-neutral-200 rounded-lg"
            onClick={handleDeleteTask}
          >
            Delete Task
          </MyButton>
          <MyButton
            classes="py-3 w-full bg-amber-300"
            onClick={handlerSaveTask}
          >
            Save Task
          </MyButton>
        </div>
      </form>
    </WrapperGrey>
  );
}
