import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const URI = 'http://localhost:4000/tasks'

const URID = 'http://localhost:4000/task/' //URI especifico para eliminar

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
        await axios.delete(`${URID}${id}`)
        getTasks()
    }

    if (tasks.length === 0) {
        return(<h1>No hay tareas</h1>)
      }



  return (

    <>
   
    <div className=" max-w-md w-full p-10 rounded-md my-2 px-4 py-2 ">
    {tasks.map ((task) => (
    

            <tr  key={task.id} >

                <Link to={`/TaskCard/${task.id}`}>  
                <header className="flex w-full bg-slate-500 hover:bg-slate-700 rounded-md my-2">
                    <h1 className="text-2xl font-bold w-full my-2 px-4 py-2">{task.title}</h1>
                    <div className="w-full px-4 py-2 my-2">
                    <p className="text-black font-semibold"> {task.description}</p>
                    
                        <button 
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2  rounded-md "
                        onClick={() => {
                            deleteTask(task.id)
                        }}>Eliminar</button>

                        <Link to={`/updatedTask/${task.id}`}>
                        <button className="bg-green-500 hover:bg-green-600 text-white px-2 py-2 rounded-md ">
                            Actualizar
                        </button>
                        </Link>

                           
        
                        
                    </div>
                </header>
            </Link>
        
            </tr>
        ))}

    </div>
    
    </>
  )
}

export default ShowTask
