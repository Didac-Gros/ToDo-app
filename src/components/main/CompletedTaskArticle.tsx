import { CompletedTask } from "../../types/global";

interface CompletedTaskArticleProps {
  completedTask: CompletedTask;
}

export function CompletedTaskArticle({
  completedTask,
}: CompletedTaskArticleProps) {
  return (
    <div className="flex border-1  border-gray-400 w-full rounded-2xl p-3 mt-6 justify-evenly">
      <div className="size-4 border-2 border-green-500 rounded-full mt-1"></div>
      <div className="flex gap-2 flex-col">
        <h1 className="font-bold text-xl">{completedTask.title}</h1>
        <p className="text-gray-500 font-semibold">
          {completedTask.description}
        </p>
        <p className="text-sm">
          Status: <span className="text-green-400">Completed</span>
        </p>
        <p className="text-sm text-gray-400">Completed on: {completedTask.date.toLocaleDateString()}</p>
      </div>
      <img className="size-28 object-cover rounded-2xl" src="/shrek.png" alt="Foto de articulo" />
    </div>
  );
}
