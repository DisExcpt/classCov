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
    date: {type: DataTypes.DATE}
})

export const studentsModel = db.define('students', {
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    guardian_id: {type: DataTypes.INTEGER},
    password: {type: DataTypes.STRING},

})

export const guardiansModel = db.define('guardians' ,{ 
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
})

export const teachersModel = db.define('teachers', {
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    hire_date: {type: DataTypes.DATE},
    password: {type: DataTypes.STRING},
})

export const administrationModel = db.define('administrations', {
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
})