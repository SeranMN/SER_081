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

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home/>} />
                <Route path='/adminDashboard' exact element={<Dashboard />} />
                <Route path='/events' exact element={<EventScheduling />} />
                <Route path='/projects' exact element={<Projects />} />
                <Route path='/projectsdes/:id' element={<ProjectDes/>} />
                
             </Routes>
        
        </BrowserRouter>
    
  )
}

export default Routing