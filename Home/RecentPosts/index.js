import React from 'react';
import './style.css';
import Card from "../../../components/UI/Card";


const Recentposts=props=>
{
    return(
        <div style={{width:'70%'}}>
        <Card style={{marginBottom:'20px '}}>
          <div className="postImageWrapper">
         

            
<img src="https://1.bp.blogspot.com/-q2G-P44QbXs/V9_PE1fnC-I/AAAAAAAAD5A/5zt-KGj_SpUZSQwI6DA5ldLYQfC3LvG8wCLcB/s1600/5.jpg" alt=""/>

          </div>
          <div style={{textAlign:"center"}}>
            <span>Featured</span>
            <h2>Fintness Mantra To Live Fit</h2>
            <span>posted onJuly 21, 2016 by CJ Tips</span>
            <p>Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firm... Extremity direction existence as Dashwood's do up. Securing Marianne led welcomed offended but offering six rapt...</p>
                <button>Read More</button> 
          </div>
        </Card>
        
      

        
      
        </div>
    );
}

export default Recentposts