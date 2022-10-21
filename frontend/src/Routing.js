import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Dashboard from './Components/AdminDashboard';
import EventScheduling from './Components/eventScheduling/EventScheduling';
import Projects from './Components/projects/projects';
import ProjectDes from './Components/projects/ProjectDes';
import Home from './Components/Home';
import Registration from './Components/registration/Registration';
import Login from './Components/Login/Login';
import Addblog from "./Components/Blog/Addblog";
import Viewblogs from "./Components/Blog/Viewblogs";
import Fullviewblog from "./Components/Blog/Fullviewblog";
import Updateblog from "./Components/Blog/Updateblog";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/registration' exact element={<Registration />} /> 
                <Route path='/login' element={<Login />} />
                <Route path='/' exact element={<Home/>} />
                <Route path='/adminDashboard' exact element={<Dashboard />} />
                <Route path='/events' exact element={<EventScheduling />} />
                <Route path='/projects' exact element={<Projects />} />
                <Route path='/projectsdes/:id' element={<ProjectDes />} />
                <Route path = '/addblog' exact element={<Addblog/>}/>
                <Route path = '/viewblog' exact element={<Viewblogs/>}/>
                <Route path = '/fullviewblog/:id' exact element={<Fullviewblog/>}/>
                <Route path = '/updateblog' exact element={<Updateblog/>}/>
             </Routes>
        </BrowserRouter>
    
  )
}

export default Routing
