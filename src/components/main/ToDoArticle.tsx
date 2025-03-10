import { ArticleTask } from "../../types/global";

interface ToDoArticleProps {
  articleTask: ArticleTask;
}

export function ToDoArticle({ articleTask }: ToDoArticleProps) {
  return (
    <div className="flex  w-full bg-white border border-gray-300 rounded-2xl p-3 shadow-md gap-4 mb-3">
      <div className="w-3 h-3 border-2 border-red-500 rounded-full"></div>

      <div className="flex-1 ">
        <h3 className="text-lg font-semibold">{articleTask.title}</h3>
        <p className="text-sm text-gray-600">{articleTask.description}</p>
        <div className="flex gap-2 text-xs text-gray-500 mt-2">
          <span>
            Priority:
            <span className="text-blue-500">{articleTask.priority}</span>
          </span>
          <span>
            Status: <span className="text-red-500">{articleTask.status}</span>
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <img
          src={articleTask.image}
          alt="Birthday Party"
          className="size-22 rounded-lg object-cover"
        />
        <span className="text-gray-500 text-sm">
          Created on: {articleTask.date.toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}
