import { db } from "./db.js";
import { DataTypes } from "sequelize";

export const task = db.define('tareas', {
    title: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    qualification: {type: DataTypes.FLOAT},
    deliveryDate: {type: DataTypes.DATE},
    
})


