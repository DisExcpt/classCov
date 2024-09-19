import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function Home() {

  const URI = 'http://localhost:4000/tasks'
  
    const [tasks, setTask] = useState([])
    useEffect(() => {
        getTasks()
    },[])


    //Mostrar Tareas
    const getTasks = async () => {
        const res = await axios.get(URI)
        setTask(res.data)
    }


    if (tasks.length === 0) {
        return(<h1>No hay tareas</h1>)
      }

    return (
      <div className='flex h-[calc(100vh-100px)] items-center justify-between'>
      
         
          <div className='bg-blue-700 '>
            <div className=" max-w-md w-full p-10 rounded-md my-2 px-4 py-2">
              {tasks.map ((task) => (
                  <tr key={task.id}>

                      <header className="flex w-full bg-slate-700 rounded-md my-2">
                        <Link to={`/updatedTask/${task.id}`}>
                          <h1 className="text-2xl w-full my-2 px-4 py-2 hover:font-semibold">{task.title}</h1>
                        </Link>
                      </header>
              
                  </tr>
              ))}

          </div>
        </div>

        <div className='bg-green-700 py-60'>
          Mund
        </div>

        <div className='bg-red-700 py-60'>
          Mundial
        </div>



      </div>
    )
  }


export default Home
