import express from "express";
import { createTask, deleteTask, getAllTasks, getTask, updateTask } from "../../controller/task.controller.js";

const router = express.Router();


router.post('/task', createTask);//C
router.get('/tasks', getAllTasks);//R
router.get('/task/:id', getTask);//R
router.put('/task/:id', updateTask);//U
router.delete('/task/:id', deleteTask);//D

export default router;
