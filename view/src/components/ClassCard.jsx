import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from "react-router-dom"

const URI = 'http://localhost:4000/class/'
const URIP = 'http://localhost:4000/teacher/'
const URIS = 'http://localhost:4000/students/'



function ClassCard() {

    const [grade, setGrade] = useState('')
    const [salon, setSalon] = useState('')
    const [shift, setShift] = useState('')
    const [teacher_id, setTeacher_id] = useState('')
    
    

    const [students, setStudents] = useState([]); // Estado para estudiantes

    const [name, setName] = useState('')
    const {id} = useParams()
    
    
    useEffect( () => {
        getClassById()
        getStudentsByClassId(id);
        
    },[id])
    
    useEffect(() => {
        if (teacher_id) {
            getTeacherById(teacher_id);
        }
    }, [teacher_id]);
    
    const getClassById = async () => {
      const res = await axios.get(URI+id)
      setGrade(res.data.grade)
      setSalon(res.data.salon)
      setShift(res.data.shift)
      setTeacher_id(res.data.teacher_id)

    }
    
    
    
    const getTeacherById = async (teacherId) => {
        const res = await axios.get(URIP + teacherId);
        setName(res.data.name);
    };


    const getStudentsByClassId = async (classId) => {
        const res = await axios.get(`${URIS}class?class_id=${classId}`);
        setStudents(res.data); // Establecer solo los estudiantes de la clase actual
    };


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
    <div className='justify-center'>
        <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md text-white mx-[38%]'>
            <h1 className="font-bold text-white text-3xl text-center">{ConvertirGrado(grade)}</h1>
            <h1 className="font-bold text-white text-3xl text-center">Grupo: {salon}</h1>
            <h1 className="font-bold text-white text-3xl text-center">Turno: {shift}</h1>
            <h1 className="font-bold text-white text-3xl text-center">Profesor: {name}</h1>

                    
            

        </div>

        <div className='bg-emerald-500'>
            <h2 className="font-bold text-white text-2xl text-center mt-4">Estudiantes:</h2>
                <ul className="mt-2">
                    {students.map(student => (
                        <li key={student.id} className="text-center">{student.name}</li> // Asumiendo que 'name' es el campo del nombre del estudiante

                    ))}
                </ul>

        </div>
      </div>
  )
}

export default ClassCard