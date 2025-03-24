import { useState } from "react";
import { Task, TaskPriority, TaskStatus } from "../types/global";
import { addTaskToFirestore } from "../services/taskRepository";

interface UseCreateTaskProps {
  setShowModal: (show: boolean) => void;
}

export function useCreateTask({ setShowModal }: UseCreateTaskProps) {
  const [title, setTitle] = useState<string>("");
  const [date, setDate] = useState<Date | null>(null);
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<TaskPriority | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [errorDate, setErrorDate] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(e.target.value);
    if (new Date() > newDate) {
      setErrorDate("Please select a future date");
      setDate(new Date(2022, 0, 0));
    } else {
      setErrorDate("");
      setDate(newDate);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      title === "" ||
      errorDate ||
      !priority ||
      description === "" ||
      image === null
    ) {
      setError(true);
      return;
    }

    setError(false);
    const newTask: Task = {
      title,
      date: date!,
      description,
      priority,
      image: URL.createObjectURL(image),
      status: TaskStatus.NOT_STARTED,
    };

    try {
      const taskId = await addTaskToFirestore(newTask);
      console.log("Task added with id:", taskId);
      setShowModal(false);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return {
    title,
    date,
    description,
    priority,
    image,
    errorDate,
    error,
    setTitle,
    handleDateChange,
    setDescription,
    setPriority,
    setImage,
    handleSubmit,
  };
}
