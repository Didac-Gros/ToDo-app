import { MainHeader } from "./MainHeader";
import { TbCalendarTime } from "react-icons/tb";
import { SectionTitle } from "./SectionTitle";
import { GrStatusUnknown } from "react-icons/gr";
import { BiTask } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { ToDoArticle } from "./ToDoArticle";
import {
  Task,
  CompletedTask,
  TaskPriority,
  TaskStatus,
} from "../../types/global";
import CircularProgress from "./CircularProgress";
import { CompletedTaskArticle } from "./CompletedTaskArticle";
import { useState } from "react";
import { TaskForm } from "../addTask/TaskForm";
import { PRIMARY_COLOR } from "../../utils/constants";

export function DashboardScreen() {
  const today = new Date();
  const dayNumber = today.getDate();
  const monthName = today.toLocaleDateString("en-US", { month: "long" });
  const [showModal, setShowModal] = useState(false);

  const articles: Task[] = [
    {
      title: "Create a new design",
      description: "Create a new design for the website",
      priority: TaskPriority.EXTREME,
      status: TaskStatus.COMPLETED,
      date: new Date(),
      image: "/articles/birthday.webp",
    },
    {
      title: "Create a new design",
      description: "Create a new design for the website",
      priority: TaskPriority.MODERATE,
      status: TaskStatus.IN_PROGRESS,
      date: new Date(), // ✅ Correcto
      image: "/articles/birthday.webp",
    },
    {
      title: "Create a new design",
      description: "Create a new design for the website",
      priority: TaskPriority.EXTREME,
      status: TaskStatus.IN_PROGRESS,
      date: new Date(), // ❌ Estaba incorrecto en tu código
      image: "/articles/birthday.webp",
    },
  ];

  const completedTasks: CompletedTask[] = [
    {
      title: "Create a new design",
      description: "Create a new design for the website",
      date: new Date(),
      image: "/articles/birthday.webp",
    },
    {
      title: "Create a new design",
      description: "Create a new design for the website",
      date: new Date(),
      image: "/articles/birthday.webp",
    },
    {
      title: "Create a new design",
      description: "Create a new design for the website",
      date: new Date(),
      image: "/articles/birthday.webp",
    },
  ];

  return (
    <main className="">
      <MainHeader></MainHeader>
      <div className="grid grid-cols-[1.1fr_1fr]  gap-4 p-4 h-screen border-1 border-gray-300 mt-8">
        <section className=" bg-white p-4 rounded-lg shadow-lg">
          <div className="flex flex-row justify-between">
            <SectionTitle
              title="To-do"
              icon={<TbCalendarTime size={30} color="gray" />}
            ></SectionTitle>
            <button
              className={`flex flex-row gap-2 items-center px-10 cursor-pointer text-[${PRIMARY_COLOR}] [&>p]:text-gray-500/70 hover:[&>p]:text-white hover:text-white hover:bg-[${PRIMARY_COLOR}] rounded-lg transition-all duration-200`}
              onClick={() => setShowModal(true)}
            >
              <FaPlus />
              <p>Add task</p>
            </button>
          </div>

          {showModal && <TaskForm setShowModal={setShowModal}></TaskForm>}

          <div className="flex flex-row gap-2 m-1 mt-2 text-sm mb-4">
            <p>
              {dayNumber} {monthName}
            </p>
            <span className="text-gray-500/70 font-semibold">· Today</span>
          </div>

          <ToDoArticle articleTask={articles[0]}></ToDoArticle>
          <ToDoArticle articleTask={articles[1]}></ToDoArticle>
          <hr className="my-10 text-gray-400" />
          <ToDoArticle articleTask={articles[2]}></ToDoArticle>
        </section>

        <section className="grid grid-rows-[0.9fr_1.5fr] gap-4">
          <article className="bg-white p-4 rounded-lg shadow-lg">
            <SectionTitle
              title="Task status"
              icon={<GrStatusUnknown size={30} color="gray" />}
            ></SectionTitle>
            <div className="flex items-center justify-center gap-6 mt-6">
              <CircularProgress
                percentage={30}
                color="green"
                name="Completed"
              ></CircularProgress>
              <CircularProgress
                percentage={30}
                color="blue"
                name="In Progress"
              ></CircularProgress>
              <CircularProgress
                percentage={30}
                color="red"
                name="Not Started"
              ></CircularProgress>
            </div>
          </article>

          <article className="bg-white p-4 rounded-lg shadow-lg">
            <SectionTitle
              title="Completed task"
              icon={<BiTask size={30} color="gray" />}
            ></SectionTitle>
            <CompletedTaskArticle
              completedTask={completedTasks[0]}
            ></CompletedTaskArticle>
            <CompletedTaskArticle
              completedTask={completedTasks[0]}
            ></CompletedTaskArticle>
          </article>
        </section>
      </div>
    </main>
  );
}
