import { useState } from "react";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { v4 as uuidv4 } from "uuid";
import { TaskList } from "./components/TaskList";
import "./global.css";
import { TaskInterface } from "./components/Task";

const prelodedTasks = [
  { id: uuidv4(), text: "Lavar a louça", status: false },
  { id: uuidv4(), text: "Pentear o gato", status: true },
  { id: uuidv4(), text: "Lavar roupa", status: false },
];

function App() {
  const [tasks, setTasks] = useState(prelodedTasks);
  const [totalCompletedTasks, setTotalCompletedTasks] = useState(
    countCompleted()
  );

  function handleAddTask(task: TaskInterface) {
    setTasks([...tasks, task]);
  }

  function deleteTask(taskToDelete: string) {
    tasks.map((task) => {
      if (task.id === taskToDelete) {
        if (task.status === true) {
          setTotalCompletedTasks(totalCompletedTasks - 1);
        }
      }
    });
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskToDelete;
    });
    setTasks(tasksWithoutDeletedOne);
  }

  function countCompleted() {
    tasks.sort((task) => {
      if (task.status === false) {
        return -1;
      } else {
        return 1;
      }
    });

    let totalCompleted = 0;
    tasks.map((task) => {
      if (task.status) {
        totalCompleted++;
      }
    });
    return totalCompleted;
  }

  function setTaskComplete(taskId: string) {
    tasks.map((task) => {
      if (task.id === taskId) {
        if (task.status === true) {
          setTotalCompletedTasks(totalCompletedTasks - 1);
        } else {
          setTotalCompletedTasks(totalCompletedTasks + 1);
        }
        task.status = !task.status;
      }
    });
  }

  return (
    <>
      <Header />
      <NewTask addTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        totalCompletedTasks={totalCompletedTasks}
        totalCreatedTasks={tasks.length}
        completeTask={setTaskComplete}
        deleteTask={deleteTask}
      />
    </>
  );
}

export default App;
