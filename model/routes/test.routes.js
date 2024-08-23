import express from "express";
import { createTask, deleteTask, getAllTasks, getTask, updateTask } from "../../controller/task.controller.js";
import { createAnnouncement, getAllAnnouncements, getAnnouncement, updateAnnouncement, deleteAnnouncement } from "../../controller/announcements.controller.js";
import { createStudent, deleteStudent, getAllStudents, getStudent, updateStudent } from "../../controller/students.controller.js";
import { createGuardian, deleteGuardian, getAllGuardians, getGuardian, updateGuardian } from "../../controller/guardians.controller.js";

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

router.post('/student', createStudent);//C
router.get('/students', getAllStudents);//R
router.get('/student/:id', getStudent);//R
router.put('/student/:id', updateStudent);//U
router.delete('/student/:id', deleteStudent);//D

router.post('/guardian', createGuardian);
router.get('/guardians', getAllGuardians);
router.get('/guardian/:id', getGuardian);
router.put('/guardian/:id', updateGuardian);
router.delete('/guardian/:id', deleteGuardian);

export default router;
