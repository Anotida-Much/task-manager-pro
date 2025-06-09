import axios from "axios";
import { User, Task } from "@/types";

// Use environment variable for base URL
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: API_URL,
});

export const getUsers = async (): Promise<User[]> => {
  const response = await api.get("/users");
  return response.data;
};

export const createUser = async (userData: {
  name: string;
  email: string;
}): Promise<User> => {
  const response = await api.post("/users", userData);
  return response.data;
};

export const getTasksForUser = async (userId: number): Promise<Task[]> => {
  const response = await api.get(`/users/${userId}/tasks`);
  return response.data;
};

export const createTaskForUser = async (
  userId: number,
  taskData: { title: string; description: string }
): Promise<Task> => {
  const response = await api.post(`/users/${userId}/tasks`, taskData);
  return response.data;
};
