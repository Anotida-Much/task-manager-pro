import { RequestHandler } from "express";
import * as taskService from "../services/taskService";

export const getTasksForUser: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const tasks = await taskService.getTasksForUser(Number(id));
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createTaskForUser: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  if (!title) {
    res.status(400).json({ error: "Title is required" });
    return;
  }
  try {
    const task = await taskService.createTaskForUser(
      Number(id),
      title,
      description
    );
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};