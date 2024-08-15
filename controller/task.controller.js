import { where } from 'sequelize'
import taskModel from '../model/taskModel.js'

//Crear R
export const  createTask = async (req, res) => {
    try {
        await taskModel.create(req.body)
        res.json({'message': 'Tarea creada correctamente'})
    } catch (error) {
        res.json({message: error.message})
    }
    
}

//Mostrar todos R
export const  getTasks = async (req, res) => {
    try {
        const tasks = await taskModel.findAll()
        res.json(tasks)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Mostrar uno R
export const  getTask = async (req, res) => {
   
    try {
        const task = await taskModel.findAll({
            where: {id: req.params.id}
        })
        res.json(task)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Actualizar U
export const  updateTask = async (req, res) => {
 
    try {
        await taskModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({"message": "Tarea Actualizada con exito"})
    } catch (error) {
        res.json({message: error.message})
    }
}

//Eliminar D
export const  deleteTask = async (req, res) => {
    try {
        await taskModel.destroy({
            where: {id: req.params.id}
        })
        res.json({'message': 'Tarea eliminada con exito'})
    } catch (error) {
        res.json({message: error.message})
    }
    
}