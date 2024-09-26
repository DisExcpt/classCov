import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import ShowTask from '../teachers/ShowTask'
import ShowAnnouncements from '../teachers/ShowAnnouncements'
import ShowClass from '../administration/Classes/ShowClass'

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
          
            <ShowTask></ShowTask>
          

        </div>

        <div className='bg-green-700 py-60'>
          <ShowAnnouncements></ShowAnnouncements>
        </div>

        <div className='bg-red-700 py-60'>
        
          <ShowClass></ShowClass>
        </div>



      </div>
    )
  }


export default Home
