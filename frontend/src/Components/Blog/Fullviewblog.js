import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Card } from '@material-ui/core';

function Fullviewblog() {

    const [listofblogs,setListoblogs] = useState([]);
    
    useEffect(()=>{

        function getBlogs(){
            axios.get("http://localhost:5000/blogs/").then((res) =>{
                setListoblogs(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getBlogs();
    }, [])



  return (
    <div>
        
        <div className='listofblogs'>
        <Card style={{maxWidth:950, margin:"0 auto", marginTop:20, padding:"10px 0px", borderStyle:"outset"}}>
        {listofblogs.map((value)=>{
            return(
                <div className='blogContainer'>
              <div key={value.id} >
                <h3 style={{textAlign:'center', fontSize:30}}>{value.title}</h3>
                <h3>{value.content}</h3>
                </div>  
                </div>
            );
        })}
        </Card>
    </div>
    </div>
  )
}

export default Fullviewblog