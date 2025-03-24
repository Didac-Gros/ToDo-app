import { CompletedTask } from "../../types/global";

interface CompletedTaskArticleProps {
  completedTask: CompletedTask;
}

export function CompletedTaskArticle({
  completedTask,
}: CompletedTaskArticleProps) {
  return (
    <div className="flex border-1  border-gray-400 w-full rounded-2xl p-3 mt-6 justify-evenly">
      <div className="size-4 border-2 border-green-500 rounded-full mt-1 mr-2"></div>
      <div className="flex gap-1 flex-col">
        <h3 className="text-lg font-semibold">{completedTask.title}</h3>
        <p className="text-gray-500 font-semibold text-sm">
          {completedTask.description}
        </p>
        <p className="text-xs">
          Status: <span className="text-green-400">Completed</span>
        </p>
        <span className="text-gray-500 text-xs mt-4">
          Completed on on: {completedTask.date.toLocaleDateString()}
        </span>
      </div>
      <img
        className="size-28 object-cover rounded-2xl"
        src={completedTask.image}
        alt="Foto de articulo"
      />
    </div>
  );
}
