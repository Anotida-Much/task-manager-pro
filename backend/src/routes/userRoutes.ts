import express from "express";
import * as userController from "../controllers/userController";
import * as taskController from "../controllers/taskController";

const router = express.Router();

router.get("/", userController.getUsers);
router.post("/", userController.createUser);
router.get("/:id/tasks", taskController.getTasksForUser);
router.post("/:id/tasks", taskController.createTaskForUser);

export default router;
