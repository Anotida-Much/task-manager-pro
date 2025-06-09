import db from "../database";
import { Task } from "../models/task";

export const getTasksForUser = (userId: number): Promise<Task[]> => {
  return new Promise((resolve, reject) => {
    db.all(
      "SELECT id, userId, title, description, completed, createdAt FROM tasks WHERE userId = ?",
      [userId],
      (err, rows) => {
        if (err) reject(err);
        else resolve(rows as Task[]);
      }
    );
  });
};

export const createTaskForUser = (
  userId: number,
  title: string,
  description: string
): Promise<Task> => {
  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO tasks (userId, title, description) VALUES (?, ?, ?)",
      [userId, title, description],
      function (err) {
        if (err) reject(err);
        else {
          db.get(
            "SELECT id, userId, title, description, completed, createdAt FROM tasks WHERE id = ?",
            [this.lastID],
            (err, row) => {
              if (err) reject(err);
              else resolve(row as Task);
            }
          );
        }
      }
    );
  });
};