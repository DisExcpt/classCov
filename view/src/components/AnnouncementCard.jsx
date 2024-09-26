import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from "react-router-dom"

const URI = 'http://localhost:4000/announcement/'

function AnnouncementCard() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [teacher_id, setTeacher_id] = useState('')
    const [clas_id, setClass_id] = useState('')
    const [date, setDate] = useState('')
  
    const {id} = useParams()
    
  
    useEffect( () => {
      getAnnouncementById()
    },[])
  
    const getAnnouncementById = async () => {
      const res = await axios.get(URI+id)
      setTitle(res.data.title)
      setContent(res.data.content)
      setTeacher_id(res.data.teacher_id)
      setClass_id(res.data.clas_id)
      setDate(res.data.date)
  
      
    }
  
    return (
      <div className='flex justify-center'>
        <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md text-white'>
            <h1>titulo: {title}</h1>
            <p >Contenido: <span className='text-red-700'>{content}</span></p>
            <p>Fecha: {date}</p>
        </div>
      </div>

    )
}

export default AnnouncementCard