import React,{useState,useEffect} from 'react';
 import "./style.css";
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';

 const BlogPost=props=>
 {

    const[post,setPost]=useState({

        id: "",
            blogCategory:"",
            blogTitle: "",
            slug: "",
            postedOn:"",
            author:"",
            blogImage:"" ,
            blogText:""
    });

    const[postId,setPostId]=useState("");
     useEffect(()=>
     {
        const postId=props.match.params.postId;
       const post= blogPost.data.find(post=>post.id==postId)
       setPost(post);
       setPostId(postId);
     },[post,props.match.params.postId]);

   if(post.blogImage=="") return null;
     return(
        
            <div className="blogpostcontainer">
                <Card>
                    <div className="blogHeader">
                    <span className="blogCategory">
                       {post.blogCategory}  </span>

                        <h1 className="postTitle">{post.blogTitle}</h1>
                  
                    <span className="postedBy">Posted on  {post.postedOn} by {post.author}</span>
                    </div>
                    <div className="postImageCounter">
                        <img src={require('../../blogpostimages/'+post.blogImage)} alt="post image"/>
                    </div>
                      <div className="postContent">
                          <h3> {post.blogTitle}</h3>
                          <p>{post.blogText}</p>
                      </div>
                    
                </Card>
            </div>
         
     );
 }

 export default BlogPost;