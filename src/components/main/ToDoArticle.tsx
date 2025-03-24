import { Task } from "../../types/global";
import {
  PRIORITY_TEXT_COLORS,
  STATUS_BORDER_COLORS,
  STATUS_TEXT_COLORS,
} from "../../utils/constants";

interface ToDoArticleProps {
  articleTask: Task;
}

export function ToDoArticle({ articleTask }: ToDoArticleProps) {
  return (
    <div className="flex  w-full bg-white border border-gray-300 rounded-2xl p-3 shadow-md gap-4 mb-3">
      <div
        className={`w-3 h-3 border-2 ${
          STATUS_BORDER_COLORS[articleTask.status]
        } rounded-full`}
      ></div>

      <div className="flex-1 flex flex-col">
        <h3 className="text-lg font-semibold">{articleTask.title}</h3>
        <p className="text-gray-500 font-semibold text-sm">
          {articleTask.description}
        </p>
        <div className="flex gap-2 text-xs text-gray-500 mt-2">
          <span>
            Priority:{" "}
            <span className={`${PRIORITY_TEXT_COLORS[articleTask.priority]}`}>
              {articleTask.priority}
            </span>
          </span>
          <span>
            Status:{" "}
            <span className={`${STATUS_TEXT_COLORS[articleTask.status]}`}>
              {articleTask.status}
            </span>
          </span>
        </div>
        <span className="text-gray-500 text-xs mt-4">
          Created on: {articleTask.date.toLocaleDateString()}
        </span>
      </div>

      <img
        src="articles/birthday.webp"
        alt="Birthday Party"
        className="size-28 object-cover rounded-2xl"
      />
    </div>
  );
}
