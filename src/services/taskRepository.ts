// src/services/firestore.ts
import { db } from "./firebase";
import {
  getDocs,
  query,
  where,
  collection,
  doc,
  updateDoc,
  setDoc,
  Timestamp,
  orderBy,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { Task, TaskStatus } from "../types/global";

export const addTaskToFirestore = async (task: Task): Promise<string> => {
  try {
    const taskId = uuidv4();
    const taskDocRef = doc(db, "tasks", taskId);

    await setDoc(taskDocRef, {
      id: taskId,
      title: task.title,
      description: task.description,
      priority: task.priority,
      status: task.status,
      date: Timestamp.fromDate(task.date),
      image: task.image,
    });

    return taskId;
  } catch (error) {
    console.error("Error al agregar el quiz:", error);
    return "";
  }
};
