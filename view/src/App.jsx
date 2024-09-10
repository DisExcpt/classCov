import {BrowserRouter, Routes, Route} from 'react-router-dom';

import ShowTask from "./teachers/ShowTask";
import CreateTask from "./teachers/CreateTask"


function App() {


  return (
    <>
      <h1 className="text-4xl font-bold">Hola</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<h1>Inicio</h1>}> </Route>
          <Route path='/showTasks' element={<ShowTask/>}>Tareas</Route>
          <Route path='createTask' element={<CreateTask/>}>Crear Tarea</Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
