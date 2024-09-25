import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const URI = 'http://localhost:4000/task/'

function updatedTask() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [notes, setNotes] = useState('')
  const [qualification, setQualification] = useState('')
  const [deliveryDate, setDeliveryDate] = useState('')

  const {id} = useParams()
  const navigate = useNavigate()

  const update = async (e) => {

    e.preventDefault()
    await axios.put(URI+id, {
        title: title,
        description: description,
        notes: notes,
        qualification: qualification,
        deliveryDate: deliveryDate
    })
    navigate('/showTasks')

  }

  useEffect( () => {
    getTaskById()
  },[])

  const getTaskById = async () => {
    const res = await axios.get(URI+id)
    setTitle(res.data.title)
    setDescription(res.data.description)
    setNotes(res.data.notes)
    setQualification(res.data.qualification)
    setDeliveryDate(res.data.deliveryDate)

    console.log(res.data.id)
  }

  return (
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md flex'>
      <form onSubmit={update} >

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

        <button className='bg-green-600 hover:bg-green-800 rounded-md w-20 mx-32' type='submit'>Actualizar</button>
      </form>
    </div>
  )
}

export default updatedTask
