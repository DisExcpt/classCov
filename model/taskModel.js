import { db } from "./db.js";
import { DataTypes } from "sequelize";

export const taskModel = db.define('tareas', {
    title: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    qualification: {type: DataTypes.STRING},
    deliveryDate: {type: DataTypes.DATE},
    
})


