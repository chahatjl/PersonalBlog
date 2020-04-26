import React,{useEffect,useState} from 'react';
 import "./style.css";
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

 const SideBar=props=>
 {

    
    const[posts,setPosts]=useState([]);
    useEffect(()=>
    {
       
      const posts=blogPost.data;
      setPosts(posts);
    },[posts]);

     return(
         <div className="sideBarContainer">

        
         <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
           <div className="cardHeader">
               <span>About-Us</span>
           </div>
           <div className="profileImageContainer">
               <img src="https://avatars2.githubusercontent.com/u/43343564?s=460&v=4" alt=""/>
           </div>
           <div className="cardBody">
               <p className="personalBio">My name is Chahat Jindal i am a software developer specialization  in front end ... :)</p>
           </div>
         </Card>

         <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}} >
           <div className="cardHeader">
               <span>Social Network</span>
           </div>
         </Card>


         <Card style={{marginBottom:'20px',padding:'20px',boxSizing:'border-box'}}>
         <div className="cardHeader">
               <span>Recent Post</span>
           </div>
          <div className="recentPosts">

              {
                  posts.map(post=>
                    {
                        return(
                            <NavLink key={post.id}to={`/post/${post.id}`}>
                                <div className="recentPost">
                            <h3>{post.blogTitle}</h3>
                            <span>{post.postedOn}</span>
                        </div>
                        </NavLink>
                            
                        );
                    })
              }
             
              
              
          </div>

         </Card>
         </div>
     );
 }

 export default SideBar;