import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Projects from './Components/projects/projects';
import ProjectDes from './Components/projects/ProjectDes';
const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/projects' exact element={<Projects />} />
                <Route path='/projectsdes/:id' element={<ProjectDes/>} />

                
             </Routes>
        
        </BrowserRouter>
    
  )
}

export default Routing