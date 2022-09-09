import axios from 'axios';
import React,{useState, useEffect} from 'react'
import "../Bstyles/listofblogs.css"
import Button from '@material-ui/core/Button'

function Viewblogs() {


    const [listofblogs,setListoblogs] = useState([]);
    
    useEffect(()=>{

        function getBlogs(){
            axios.get("http://localhost:5000/blogs").then((res) =>{
                setListoblogs(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getBlogs();
    }, [])



  return (
    <div className='listofblogs'>
        <h1>List Of Blogs</h1>
        <Button style={{maxWidth:110, maxHeight:45, marginLeft:900, marginTop:0, backgroundColor:"#32cd32"}} variant="contained" 
             href="http://localhost:3000/addblog">
              Add Blog
            </Button>
        {listofblogs.map((value)=>{
            return(
                <div className='blogContainer'>
              <div key={value.id} className="blog">
                <h3>Blog Title:{value.title}</h3>
                <h3>Author:{value.name}</h3>
                </div>  
                <Button style={{maxWidth:10, maxHeight:40, marginLeft:10, marginTop:10}} variant="contained" color="primary"
             href="http://localhost:3000/fullviewblog">
              More..
            </Button>
                </div>
            );
        })}
    </div>
  )
}

export default Viewblogs