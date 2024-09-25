import {useForm} from 'react-hook-form'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URI = 'http://localhost:4000/task'

function CreateTask() {
  const {register, handleSubmit} = useForm()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [notes, setNotes] = useState('')
  const [qualification, setQualification] = useState('')
  const [deliveryDate, setDeliveryDate] = useState('')

  const navigate =useNavigate()

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  })

  const create = async (e) => {
    e.preventDefault() 
    await axios.post(URI,  {title: title, description: description, notes: notes, qualification: qualification,
      deliveryDate: deliveryDate
    })
    navigate('/Home')
  }


  return (
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md flex'>
      <form onSubmit={create} >
        <h1 className='font-bold text-white text-center text-3xl'>Tareas</h1>
        <input 
        type='text' 
        placeholder='Titulo'
        value={title}
        onChange={ (e) => setTitle(e.target.value)}
        className='w-full px-4 py-2 rounded-md my-2'
        autoFocus
        ></input>

        <textarea rows='3' 
        placeholder='Descripcion'
        value={description}
        onChange={ (e) => setDescription(e.target.value)}
        className='w-full px-4 py-2 rounded-md my-2'
        ></textarea>

        <textarea rows='3'
        placeholder='Notas'
        value={notes}
        onChange={ (e) => setNotes(e.target.value)}
        className='w-full px-4 py-2 rounded-md my-2'
        ></textarea>

        <input 
        type='text'
        placeholder='Calificacion'
        value={qualification}
        onChange={ (e) => setQualification(e.target.value)}
        className='w-32 px-1 py-1 rounded-md my-1 mx-10'
        ></input>

        <input
        type='date'
        placeholder='0000-00-00'
        value={deliveryDate}
        onChange={ (e) => setDeliveryDate(e.target.value)}
        className='px-1 py-1 rounded-md my-2'
        >
        </input>

        <button className='bg-green-600 rounded-md w-20 mx-32' type='submit'>Guardar</button>
      </form>
    </div>
  )
}

export default CreateTask
