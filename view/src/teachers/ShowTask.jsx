import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:4000/tasks'

const ShowTask = () => {
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
    <div className='container'>
        
        {tasks.map ((task) => (
                                <tr key={task.id}>
                                    <td>{task.title}</td>
                                    <td>{task.description}</td>
                                </tr>
                            ))}
    </div>
  )
}

export default ShowTask
