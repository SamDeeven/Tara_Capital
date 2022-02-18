import React,{useState,useEffect} from 'react'

const Posts = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [user, setUser] = useState("")
  const [search, setSearch] = useState("")
  const [data, setData] = useState([]);

const submitHandler=(e)=>{
  e.preventDefault();
console.log(search)
}

// fetchData is for fetching all the posts from the backend using fetch method
const fetchData = ()=>{
  fetch("http://localhost:5000/allPosts")
  .then((res)=>{
    return res.json();
  }).then((data)=>{
    console.log(data)
    let result = data.posts
    setData(result)
  })
}

// It will display after the initial render of the page
  useEffect(()=>{
   
fetchData();
  },[])

  return (
    <div>

<nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">News</a>
    <form className="d-flex" onSubmit={submitHandler}>
      <input className='inputSearch' value={search} placeholder='Search' onChange={(e)=>setSearch(e.target.value)}/>
      <button className='btn' type='submit'>Search</button>
    </form>
    <a className="btn btn-outline-success" href="/createPost" type="submit">Create Post</a>

  </div>
</nav>

{data.length > 1 ?


 <div className="card" style={{"width": "18rem"}}>
 <div className="card-body">
<h5 className="card-title" value={title}>Title</h5>
<p className="card-text" value={description}>Dessciption: Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<h6 className="card-subtitle mb-2 text-muted" value={user}>Username</h6>

</div>
</div>
:
null
}


     
    </div>
  )
}

export default Posts
