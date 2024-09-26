import {BrowserRouter, Routes, Route} from 'react-router-dom';

import ShowTask from "./teachers/ShowTask";
import CreateTask from "./teachers/CreateTask"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UpdatedTask from './teachers/updatedTask';
import TaskCard from './components/TaskCard';
import CreateAnnouncements from './teachers/CreateAnnouncements';
import UpdatedAnnouncement from './teachers/UpdatedAnnouncement';
import ShowAnnouncements from './teachers/ShowAnnouncements';
import AnnouncementCard from './components/AnnouncementCard';
import Login from './pages/Login';
import CreateTeacher from './administration/CreateTeacher';
import CreateGuardian from './administration/CreateGuardian';
import CreateStudent from './administration/CreateStudent';
import CreateAdmin from './administration/CreateAdmin';
import CreateClass from './administration/Classes/CreateClass';
import UpdateClass from './administration/Classes/UpdateClass';
import ShowClass from './administration/Classes/ShowClass';
import ClassCard from './components/ClassCard';


function App() {


  return (
    <>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>

          <Route path='/Login' element={<Login/>}>Login</Route>
          
          
          <Route path='/showTasks' element={<ShowTask/>}>Tareas</Route>
          <Route path='/createTask' element={<CreateTask/>}>Crear Tarea</Route>
          <Route path='/Home' element={<Home/>}>Inicio</Route>
          <Route path='/UpdatedTask/:id' element={<UpdatedTask/>}>Actualizar</Route>
          <Route path='/TaskCard/:id' element={<TaskCard/>}>Task Cards</Route>

          <Route path='/CreateAnnouncements' element={<CreateAnnouncements/>}>Anuncios</Route>
          <Route path='/UpdatedAnnouncement/:id' element={<UpdatedAnnouncement/>}>Actualizar Anuncio</Route>
          <Route path='/ShowAnnouncements' element={<ShowAnnouncements/>}>Mostrar Anuncios</Route>
          <Route path='/AnnouncementCard/:id' element={<AnnouncementCard/>}>Task Anuncio</Route>

          <Route path='/CreateTeacher' element={<CreateTeacher/>}></Route>
          <Route path='/CreateGuardian' element={<CreateGuardian/>}></Route>
          <Route path='/CreateStudent' element={<CreateStudent/>}></Route>
          <Route path='/CreateAdmin' element={<CreateAdmin/>}></Route>

          <Route path='/CreateClass' element={<CreateClass/>}></Route>
          <Route path='/ShowClass' element={<ShowClass/>}></Route>
          <Route path='/UpdateClass/:id' element={<UpdateClass/>}></Route>
          <Route path='/ClassCard/:id' element={<ClassCard/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
