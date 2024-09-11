import {BrowserRouter, Routes, Route} from 'react-router-dom';

import ShowTask from "./teachers/ShowTask";
import CreateTask from "./teachers/CreateTask"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import updatedTask from './teachers/updatedTask';


function App() {


  return (
    <>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          
          <Route path='/showTasks' element={<ShowTask/>}>Tareas</Route>
          <Route path='/createTask' element={<CreateTask/>}>Crear Tarea</Route>
          <Route path='/' element={<Home/>}>Inicio</Route>
          <Route path='/updatedTask/:id' element={<updatedTask/>}>Actualizar</Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
