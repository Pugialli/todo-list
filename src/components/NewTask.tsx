import { v4 as uuidv4 } from "uuid";
import { Button } from "./Button";
import styles from "./NewTask.module.css";
import { TaskInterface } from "./Task";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface NewTaskProps {
  addTask: (task: TaskInterface) => void;
}

export function NewTask({ addTask }: NewTaskProps) {
  const [newTask, setNewTask] = useState("");

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Este campo é obrigatório");
  }

  function handleAddTask(event: FormEvent) {
    event.preventDefault();

    const task = {
      id: uuidv4(),
      text: newTask,
      status: false,
    };
    addTask(task);

    setNewTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  return (
    <form onSubmit={handleAddTask} className={styles.task}>
      <input
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        className={styles.input}
        onChange={handleNewTaskChange}
        onInvalid={handleNewTaskInvalid}
        required
      />
      <Button type="create" />
    </form>
  );
}
