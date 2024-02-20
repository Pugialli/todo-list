import { useState } from "react";
import { Button } from "./Button";
import styles from "./Task.module.css";

export interface TaskInterface {
  id: string;
  text: string;
  status: boolean;
}

interface TaskProps {
  task: TaskInterface;
  onDeleteTask: (id: string) => void;
  onCompleteTask: (id: string) => void;
}

export function Task({ task, onDeleteTask, onCompleteTask }: TaskProps) {
  const [completedTask, setCompletedTask] = useState(task.status);

  function handleComplete() {
    onCompleteTask(task.id);
    setCompletedTask(!completedTask);
  }

  function handleDelete() {
    onDeleteTask(task.id);
  }

  return (
    <div
      className={completedTask ? styles.taskCompleted : styles.task}
      key={task.id}
    >
      <Button
        type="checkbox"
        checkbox={completedTask}
        onClickFunction={handleComplete}
      />
      <span
        className={completedTask ? styles.taskTextCompleted : styles.taskText}
      >
        {task.text}
      </span>
      <Button type="delete" onClickFunction={handleDelete} />
    </div>
  );
}
