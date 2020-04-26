import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import BlogPost from '../../components/BlogPost';
import SideBar from '../../components/SideBar';
import Lay from '../../components/Lay';


const Post=props=>
{

  console.log(props);

    return(
      
           <Lay>
         <BlogPost{...props}/>
         </Lay>
          
      
    );
}
export default Post