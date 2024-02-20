import { Task, TaskInterface } from "./Task";
import clipboard from "/src/assets/clipboard.svg";
import styles from "./TaskList.module.css";

interface TaskListProps {
  tasks: TaskInterface[];
  totalCompletedTasks: number;
  totalCreatedTasks: number;
  completeTask: (taskId: string) => void;
  deleteTask: (taskId: string) => void;
}

export function TaskList({
  tasks,
  totalCompletedTasks,
  totalCreatedTasks,
  completeTask,
  deleteTask,
}: TaskListProps) {
  return (
    <div className={styles.tasklist}>
      <div className={styles.listHeader}>
        <div className={styles.createdTasks}>
          <strong>Tarefas criadas</strong>
          <strong className={styles.counter}>{totalCreatedTasks}</strong>
        </div>
        <div className={styles.completedTasks}>
          <strong>Concluídas</strong>
          <strong className={styles.counter}>
            {totalCompletedTasks} de {totalCreatedTasks}
          </strong>
        </div>
      </div>
      <div className={styles.list}>
        <div className={tasks.length === 0 ? styles.empty : styles.emptyHidden}>
          <img src={clipboard} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              onCompleteTask={completeTask}
              onDeleteTask={deleteTask}
            />
          );
        })}
      </div>
    </div>
  );
}
