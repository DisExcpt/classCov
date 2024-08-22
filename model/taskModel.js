import { db } from "./db.js";
import { DataTypes } from "sequelize";

export const taskModel = db.define('tareas', {
    title: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    qualification: {type: DataTypes.STRING},
    deliveryDate: {type: DataTypes.DATE},
    notes: {type: DataTypes.STRING}
    
})

export const announcementsModel = db.define('announcements', {
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING},
    teacher_id: {type: DataTypes.INTEGER},
    class_id: {type: DataTypes.INTEGER},
})


