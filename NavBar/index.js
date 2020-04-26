import React, { useState } from 'react';
import './style.css';
import {NavLink} from 'react-router-dom'


const NavBar=props=>
{
    const[search,setSearch]=useState(false);
    const SubmitSearch=(e)=>
    {
         e.preventDefault();
         alert("searched");
    }
    const openSearch=()=>
    {
        setSearch(true);
    }

    const searchClass=search ?'searchInput active':'searchInput';
    return(
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about-us">AboutUS</NavLink></li>
                <li><NavLink to="/contact-us">ContactUs</NavLink></li>
                <li><NavLink to="/post">Posts</NavLink></li>
                

            </ul>
          <div className="search">
              <form onSubmit={ SubmitSearch}>
                  <input type="text" className={searchClass} placeholder="Search"/>
              <img onClick={openSearch} className="searchIcon" alt="Search"/></form>

              
          </div>
        </div>
    );
}
export default NavBar
