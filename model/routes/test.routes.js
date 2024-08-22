import express from "express";
import { createTask, deleteTask, getAllTasks, getTask, updateTask } from "../../controller/task.controller.js";
import { createAnnouncement, getAllAnnouncements, getAnnouncement, updateAnnouncement, deleteAnnouncement } from "../../controller/announcements.controller.js";

const router = express.Router();


router.post('/task', createTask);//C
router.get('/tasks', getAllTasks);//R
router.get('/task/:id', getTask);//R
router.put('/task/:id', updateTask);//U
router.delete('/task/:id', deleteTask);//D


router.post('/announcement', createAnnouncement);//C
router.get('/announcements', getAllAnnouncements);//R
router.get('/announcement/:id', getAnnouncement);//R
router.put('/announcement/:id', updateAnnouncement);//U
router.delete('/announcement/:id', deleteAnnouncement);//D

export default router;
