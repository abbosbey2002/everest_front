
import React from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";
import Main from "../component/Main";
import Apply from "../component/Apply";
import Usersave from "../component/Usersave"
// import Course from "../component/Course";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register";



function Admin(){
    return (
        <>
      
         <div id="app">
   
   <div className="main-wrapper main-wrapper-1">
     <div className="navbar-bg" />
     
    <Route path="/" element={ <Usersave /> } />
    <Navbar />
    <Route path="/admin" element={ <Register /> } />
   
   <Sidebar />
<Routes>



</Routes>
      
     {/* Main Content */}

    
    
   </div>
 
 </div>
     
     

        </>
    )
}

export default Admin;