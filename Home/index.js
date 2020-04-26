import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import SideBar from '../../components/SideBar';
import Recentposts from './RecentPosts';
import blogData from '../../data/blog.json';
import Lay from '../../components/Lay';



const SideImage=props=>
{
  return(
    <div style={{height:`${props.height}px`}}>

    <img src={props.src} alt=""/>
      </div>
  );
}

const imageGallery=props=>( 
<div className="galleryPost" style={props.galleryStyle}>

              
<section style={{width:props.largeWidth}}>
      <div className="mainImageWrapper">

  
     <img  src={require('../../blogPostImages/'+props.imageArray[2])}  alt=""/>/>
  </div>
</section>
<section  className={"sideImageWrapper"} style={{width:props.smallWidth}}>

  {
    props.imageArray.map(image=>
      <SideImage
      height={props.sideImageHeight}
      src={require('../../blogPostImages/'+image)}  alt=""/>
      
      )
  }
 
  

   
 

</section >
</div>
);

const Home=props=>{
  const galleryHeight=450;
  const galleryStyle={
    height:galleryHeight+'px',
    overflow:'hidden'

  }

  const imgAr=blogData.data.map(post=>post.blogImage)

  const sideImageHeight=galleryHeight/3;

    return(
        <div>
          <Card>
          <imageGallery
              largeWidth="70%"
              smallWidth="30%"
            
             sideImageHeight={sideImageHeight}
             galleryStyle={galleryStyle}

             imageArray={imgAr}
              />
              
           
          </Card>
                

                <Lay>
                   <Recentposts style={{width:'70%'}}/>
                   </Lay>
               
                   
             
                     
        </div>
    );
}
export default Home;