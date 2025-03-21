export interface ArticleTask {
  title: string;
  description: string;
  priority: "secundary" | "moderate" | "important";
  status: "completed" | "in-progress" | "not-started";
  date: Date;
  image: string;
}
export interface CompletedTask {
  title: string;
  description: string;
  date: Date;
  image: string;
}

export enum TaskPriority {
  EXTREME = "Extreme",
  MODERATE = "Moderate",
  LOW = "Low",
}
