import { Router } from "express";
import { getTest, getTests, createTest, deleteTest, updateTest } from "../../controller/test.controller.js";
import { conn } from "../db.js";
import { createTask, deleteTask, getAllTasks, getTask, updateTask } from "../../controller/task.controller.js";

const router = Router();

router.get('/ping', async (req,res) => {
    const [rows] = await conn.query('select 1+1 as result');
    console.log(rows);
    res.json(rows)
});

router.get('/test', getTests);
router.get('/tests/:id',getTest);
router.post('/test',createTest);
router.put('/test/:id',updateTest);
router.delete('/test/:id',deleteTest);

router.post('/task', createTask);//C
router.get('/tasks', getAllTasks);//R
router.get('/task/:id', getTask);//R
router.put('/task/:id', updateTask);//U
router.delete('/task/:id', deleteTask);//D

export default router;
