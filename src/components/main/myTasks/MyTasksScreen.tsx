import { useEffect, useState } from "react";
import { Task } from "../../../types/global";
import { getTasksToDoFromFirestore } from "../../../services/taskRepository";
import { ToDoArticle } from "../ToDoArticle";

export function MyTasksScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTasksToDoFromFirestore()
      .then((tasks) => setTasks(tasks))
      .catch((error) => console.error(error));
  }, []);

  return (
    <main className="grid grid-cols-2 gap-4">
      <section className="border-2 border-gray-300 rounded-lg px-6 py-4 shadow-lg text-lg font-semibold">
        <div className="flex ">
          <h1 className="underline decoration-amber-600 underline-offset-6 decoration-3">
            My T
          </h1>
          <h1>asks</h1>
        </div>
        <ul className="mt-4">
          {tasks.map((task) => (
            <ToDoArticle articleTask={task}></ToDoArticle>
          ))}
        </ul>
      </section>
      <section className="border-2 border-gray-300 rounded-lg p-4 shadow-lg"></section>
    </main>
  );
}
