export interface Task {
  id?: string;
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

export enum ScreenType {
  DASHBOARD = "Dashborad",
  VITAL_TASKS = "Vital Tasks",
  MY_TASKS = "My Tasks",
  TASK_CATEGORIES = "Task Categories",
  SETTINGS = "Settings",
  HELP = "Help",
  LOGOUT = "Logout",
}