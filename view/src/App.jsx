import {BrowserRouter, Routes, Route} from 'react-router-dom';

import ShowTask from "./teachers/ShowTask";
import CreateTask from "./teachers/CreateTask"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UpdatedTask from './teachers/updatedTask';
import TaskCard from './components/TaskCard';


function App() {


  return (
    <>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          
          <Route path='/showTasks' element={<ShowTask/>}>Tareas</Route>
          <Route path='/createTask' element={<CreateTask/>}>Crear Tarea</Route>
          <Route path='/Home' element={<Home/>}>Inicio</Route>
          <Route path='/UpdatedTask/:id' element={<UpdatedTask/>}>Actualizar</Route>
          <Route path='/TaskCard/:id' element={<TaskCard/>}>Task Cards</Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
