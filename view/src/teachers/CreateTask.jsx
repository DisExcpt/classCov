import {useForm} from 'react-hook-form'


function CreateTask() {
  const {register, handleSubmit} = useForm()
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  })


  return (
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md flex'>
      <form onSubmit={onSubmit}>
        <input 
        type='text' 
        placeholder='Titulo'
        {...register('title')}
        className='w-full px-4 py-2 rounded-md my-2'
        autoFocus
        ></input>

        <textarea rows='3' 
        placeholder='Descripcion'
        {...register('description')}
        className='w-full px-4 py-2 rounded-md my-2'
        ></textarea>

        <textarea rows='3'
        placeholder='Notas'
        {...register('notes')}
        className='w-full px-4 py-2 rounded-md my-2'
        ></textarea>

        <input 
        type='text'
        placeholder='Calificacion'
        {...register('qualification')}
        className='w-32 px-1 py-1 rounded-md my-1 mx-10'
        ></input>

        <input
        type='date'
        placeholder='0000-00-00'
        {...register('deliveryDate')}
        className='px-1 py-1 rounded-md my-2'
        >
        </input>

        <button className='bg-green-600 rounded-md w-20 mx-32'>Guardar</button>
      </form>
    </div>
  )
}

export default CreateTask
