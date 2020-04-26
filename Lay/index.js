import React from 'react';
import './style.css';
import SideBar from '../SideBar';

const Lay=props=>
{
    return(
        <div className="container">
            {props.children}<SideBar/>
            </div>
    );
}


export default Lay;