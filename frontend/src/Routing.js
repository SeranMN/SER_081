import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Dashboard from './Components/AdminDashboard';
import EventScheduling from './Components/eventScheduling/EventScheduling';

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/adminDashboard' exact element={<Dashboard />} />
                <Route path='/events' exact element={<EventScheduling />} />
             </Routes>
        
        </BrowserRouter>
    
  )
}

export default Routing