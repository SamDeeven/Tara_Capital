import React, { useState, useEffect } from "react";
import { useNavigate} from 'react-router-dom';

const CreatePost = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [user, setUser] = useState("")
    
    useEffect(()=>{
        fetch("/createPost",{
            method: "post",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                title,
                description,
                user,
            })
            
        }) 
            
        .then(res =>res.json())
        .then(data =>{
            if(data.error){
                console.log(data.error)
            }
            else{
                console.log("Success")

                navigate('/allPosts')
            }
            
        }).catch(err=>{
            console.log(err)
        })
    }, [])

    const postDetails = () => {
        const data = new FormData()
      
        fetch("https://api.jsonbin.io/b/620fa00bca70c44b6e9e18ff", {
                method: "post",
                body: data
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })


    }



    return ( 
        <div>

        <div class="mb-3">
            <label for="exampleFormControlInput1" className="form-label"><b>Title</b></label>
            <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} className="form-control" id="exampleFormControlInput1" placeholder="Title"/>
        </div>
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label"><b>Description</b></label>
            <textarea value={description} onChange={(e)=>setDescription(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label"><b>User</b></label>
            <input type="text" onChange={(e)=>setUser(e.target.value)} value={user} className="form-control" id="exampleFormControlInput1" placeholder="User"/>
        </div>
        <div className="mb-3">
            <button type='submit' className="btn btn-primary" onClick = {() => postDetails() }>Submit</button>
        </div>
        </div>
        

    )
}

export default CreatePost