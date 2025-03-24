export interface Task {
  title: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
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

export enum TaskStatus {
  COMPLETED = "Completed",
  IN_PROGRESS = "In-progress",
  NOT_STARTED = "Not-started",
}
