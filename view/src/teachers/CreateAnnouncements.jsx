import {useForm} from 'react-hook-form'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:4000/announcement'

function CreateAnnouncements() {
    const {register, handleSubmit} = useForm()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [teacher_id, setTeacher_id] = useState('')
    const [class_id, setClass_id] = useState('')
    const [date, setDate] = useState('')
  
    const navigate =useNavigate()
  
    const onSubmit = handleSubmit((data) => {
      console.log(data);
    })
  
    const create = async (e) => {
      e.preventDefault() 
      await axios.post(URI,  {title: title, content: content, teacher_id: teacher_id, class_id: class_id, date: date,
      })
      navigate('/Home')
    }
  
  
    return (
      <div className='flex justify-center'>
        <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md flex'>
          <form onSubmit={create} >
              <h1 className='font-bold text-white text-center text-3xl'>Anuncios</h1>
            <input 
            type='text' 
            placeholder='Titulo'
            value={title}
            onChange={ (e) => setTitle(e.target.value)}
            className='w-full px-4 py-2 rounded-md my-2'
            autoFocus
            ></input>
    
            <textarea rows='3' 
            placeholder='Contenido'
            value={content}
            onChange={ (e) => setContent(e.target.value)}
            className='w-full px-4 py-2 rounded-md my-2'
            ></textarea>
    
            <input
            placeholder='id Profesor'
            value={teacher_id}
            onChange={ (e) => setTeacher_id(e.target.value)}
            className='w-32 px-1 py-1 rounded-md my-2'
            ></input>
    
            <input 
            type='text'
            placeholder='id Materia'
            value={class_id}
            onChange={ (e) => setClass_id(e.target.value)}
            className='w-32 px-1 py-1 rounded-md my-1 mx-10'
            ></input>

            <input
              type='datetime-local'
              placeholder='0000-00-00'
              value={date}
              onChange={ (e) => setDate(e.target.value)}
              className='px-1 py-1 rounded-md my-2'
            >
            </input>
    
    
            <button className='bg-green-600 rounded-md w-20 mx-32' type='submit'>Guardar</button>
          </form>
        </div>
      </div>
    )
}

export default CreateAnnouncements