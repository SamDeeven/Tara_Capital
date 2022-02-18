import React,{useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CreatePost from './components/CreatePost'
import './App.css';
import Posts from './components/Posts';
function App() {
  return (
    <div>


      <Router>
          <Routes>
          <Route exact path="/createPost" element={<CreatePost/>}/>
            
              <Route exact path="/allPosts" element={<Posts/>}/>
         
          </Routes>
      </Router>






    </div>
  );
}

export default App;
