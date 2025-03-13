"use client";
import Image from "next/image";

export default function Task({
  index,
  task,
  changeTaskComplete,
  openTaskModal,
}) {
  const handleCheckbox = (event) => {
    event.stopPropagation();
    changeTaskComplete(index);
  };

  const handlerOpenTaskModal = () => {
    openTaskModal(index);
  };

  return (
    <div
      className="flex items-center justify-between px-3.5 py-5 w-full border-b border-b-neutral-200 cursor-pointer hover:bg-neutral-100"
      onClick={handlerOpenTaskModal}
    >
      <div className="flex items-center gap-3.5">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleCheckbox}
        />
        <p className={task.completed ? "line-through text-stone-300" : ""}>
          {task.title}
        </p>
      </div>
      <Image
        src="/arrow.svg"
        alt="arrow icon"
        width={20}
        height={20}
        className="rotate-90"
      />
    </div>
  );
}
