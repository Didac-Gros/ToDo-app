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
import { Task, TaskPriority, TaskStatus } from "../types/global";
import { TASK_COLLECTION } from "../utils/constants";

export const addTaskToFirestore = async (task: Task): Promise<string> => {
  try {
    const taskId = uuidv4();
    const taskDocRef = doc(db, TASK_COLLECTION, taskId);

    await setDoc(taskDocRef, {
      id: taskId,
      title: task.title,
      description: task.description,
      priority: task.priority,
      status: task.status,
      date: Timestamp.fromDate(task.date),
      image: task.image,
      createdAt: Timestamp.now(),
    });

    return taskId;
  } catch (error) {
    console.error("Error al agregar el quiz:", error);
    return "";
  }
};

export const getTasksToDoFromFirestore = async (): Promise<Task[]> => {
  try {
    const tasksRef = collection(db, TASK_COLLECTION); // Asegúrate de que "quizz" es el nombre correcto en Firestore
    const q = query(
      tasksRef,
      where("status", "!=", TaskStatus.COMPLETED),
      orderBy("createdAt", "desc")
    );

    const querySnapshot = await getDocs(q);
    const tasks: Task[] = querySnapshot.docs.map((doc) => ({
      id: doc.get("id"),
      title: doc.get("title"),
      description: doc.get("description"),
      priority: doc.get("priority"),
      status: doc.get("status"),
      date: doc.get("date").toDate(),
      image: doc.get("image"),
    }));

    return tasks;
  } catch (error) {
    console.error("Error obteniendo las tareas del usuario:", error);
    return [];
  }
};
