import db from "../database";
import { User } from "../models/user";

export const getAllUsers = (): Promise<User[]> => {
  return new Promise((resolve, reject) => {
    db.all("SELECT id, name, email, createdAt FROM users", [], (err, rows) => {
      if (err) reject(err);
      else resolve(rows as User[]);
    });
  });
};

export const createUser = (name: string, email: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [name, email],
      function (err) {
        if (err) reject(err);
        else {
          db.get(
            "SELECT id, name, email, createdAt FROM users WHERE id = ?",
            [this.lastID],
            (err, row) => {
              if (err) reject(err);
              else resolve(row as User);
            }
          );
        }
      }
    );
  });
};
