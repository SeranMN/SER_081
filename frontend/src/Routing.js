import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Addblog from "./Components/Blog/Addblog";
import Viewblogs from "./Components/Blog/Viewblogs";
import Fullviewblog from "./Components/Blog/Fullviewblog";
import Updateblog from "./Components/Blog/Updateblog";

const Routing = () => {

    return(
        <BrowserRouter>
        <Routes>
            <Route path = '/addblog' exact element={<Addblog/>}/>
            <Route path = '/viewblog' exact element={<Viewblogs/>}/>
            <Route path = '/fullviewblog' exact element={<Fullviewblog/>}/>
            <Route path = '/updateblog' exact element={<Updateblog/>}/>
            
        </Routes>
        </BrowserRouter>
    )
}

export default Routing;