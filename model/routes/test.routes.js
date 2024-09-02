import express from "express";
import { createTask, deleteTask, getAllTasks, getTask, updateTask } from "../../controller/task.controller.js";
import { createAnnouncement, getAllAnnouncements, getAnnouncement, updateAnnouncement, deleteAnnouncement } from "../../controller/announcements.controller.js";
import { createStudent, deleteStudent, getAllStudents, getStudent, updateStudent } from "../../controller/students.controller.js";
import { createGuardian, deleteGuardian, getAllGuardians, getGuardian, updateGuardian } from "../../controller/guardians.controller.js";
import { createTeacher, deleteTeacher, getAllTeachers, getTeacher, updateTeacher } from "../../controller/teachers.controller.js";
import { createAdmin, deleteAdmin, getAdmin, getAllAdmin, updateAdmin } from "../../controller/administration.controller.js";

const router = express.Router();

//Tareas
router.post('/task', createTask);//C
router.get('/tasks', getAllTasks);//R
router.get('/task/:id', getTask);//R
router.put('/task/:id', updateTask);//U
router.delete('/task/:id', deleteTask);//D

//Anuncios
router.post('/announcement', createAnnouncement);//C
router.get('/announcements', getAllAnnouncements);//R
router.get('/announcement/:id', getAnnouncement);//R
router.put('/announcement/:id', updateAnnouncement);//U
router.delete('/announcement/:id', deleteAnnouncement);//D

//Estudiantes
router.post('/student', createStudent);//C
router.get('/students', getAllStudents);//R
router.get('/student/:id', getStudent);//R
router.put('/student/:id', updateStudent);//U
router.delete('/student/:id', deleteStudent);//D

//Tutores
router.post('/guardian', createGuardian);
router.get('/guardians', getAllGuardians);
router.get('/guardian/:id', getGuardian);
router.put('/guardian/:id', updateGuardian);
router.delete('/guardian/:id', deleteGuardian);

//Profesores
router.post('/teacher', createTeacher);
router.get('/teachers', getAllTeachers);
router.get('/teacher/:id', getTeacher);
router.put('/teacher/:id', updateTeacher);
router.delete('/teacher/:id', deleteTeacher);

//Administracion
router.post('/admin', createAdmin);
router.get('/admins', getAllAdmin);
router.get('/admin/:id', getAdmin);
router.put('/admin/:id', updateAdmin);
router.delete('/admin/:id', deleteAdmin);


export default router;
