import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:4000/tasks'

function ShowTask()  {

    const [tasks, setTask] = useState([])
    useEffect(() => {
        getTasks()
    },[])


    //Mostrar Tareas
    const getTasks = async () => {
        const res = await axios.get(URI)
        setTask(res.data)
    }


    //Eliminar Tarea
    const deleteTask = async(id) => {
        axios.delete(`${URI}${id}`)
        getTasks()
    }

    if (tasks.length === 0) {
        return(<h1>No hay tareas</h1>)
      }



  return (
    <div className=" max-w-md w-full p-10 rounded-md">
        {tasks.map ((task) => (
            <tr key={task.id}>

                <header className="flex justify-between bg-slate-700 mt-1">
                    <h1 className="text-2xl font-bold">{task.title}</h1>
                    <div className="flex gap-x-2 items-center ">
                    <p className="text-slate-300"> {task.description}</p>
                        <button 
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                        onClick={() => {
                            deleteTask(task.id)
                        }}>Eliminar</button>
        
                        
                    </div>
                </header>
        
            </tr>
        ))}

    </div>
  )
}

export default ShowTask
