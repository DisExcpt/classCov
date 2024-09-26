import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from "react-router-dom"

const URI = 'http://localhost:4000/class/'

function ClassCard() {

    const [grade, setGrade] = useState('')
    const [salon, setSalon] = useState('')
    const [shift, setShift] = useState('')
    const [teacher_id, setTeacher_id] = useState('')
  
    const {id} = useParams()
    
  
    useEffect( () => {
      getClassById()
    },[])
  
    const getClassById = async () => {
      const res = await axios.get(URI+id)
      setGrade(res.data.grade)
      setSalon(res.data.salon)
      setShift(res.data.shift)
      setTeacher_id(res.data.teacher_id)

    }

    const ConvertirGrado = (grade) => {
        switch (grade) {
            case 1:
                return 'Primero';
                break;
            case 2:
                return 'Segundo';
                break;
            case 3:
                return 'Tercero';
                break;
            case 4:
                return 'Cuarto';
                break;
            case 5:
                return 'Quinto';
                break;
            case 6:
                return 'Sexto';
                break;

            default:
                return `Grado: ${grade}`
                break;
        }
    }
  return (
    <div className='flex justify-center'>
        <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md text-white'>
            <h1 className="font-bold text-white text-3xl text-center">{ConvertirGrado(grade)}</h1>
            <h1 className="font-bold text-white text-3xl text-center">Grupo: {salon}</h1>
            <h1 className="font-bold text-white text-3xl text-center">Turno: {shift}</h1>
                    
            <h1 className="font-bold text-white text-3xl text-center">id del Profesor: {teacher_id}</h1>

        </div>
      </div>
  )
}

export default ClassCard