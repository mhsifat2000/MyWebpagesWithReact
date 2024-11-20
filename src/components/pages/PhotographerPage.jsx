import web from '../../styles/Web.module.css';
import Home from '../../styles/Home.module.css';
import me from '../../assets/Images/me.jpg';
import logo from '../../assets/Images/logo.png'
import {Link} from 'react-router-dom'
function Photographer(){
      return (
      <>
            <div>
                <h1 className={web.h2}>
                     Story of a photographer 
                </h1>
           </div>
           <div className={Home.imgBox}>
           <div className={Home.box2}>
                     <img src={me}  alt="my photo"/>
              
             </div>  
        </div>
           <div className={Home.photoLogo}> 
            
                
                
                       <img src={logo} />
                
            
    </div>
           <div className={Home.paragraph}>
        I am a photographer. I love photography. But I have no camera! I usually take photo by my smartphone, <b>POCO X3 Pro</b> with <b>Gcam</b>. Gcam can use full raw mussel power of camera in my phone.<br/><br/>
  I hope one day, I own everything!       
    <br/>
    Some of my photography :
     <div className={Home.linkPage}>
           <Link to="/ImagePage" className={web.link}>
                click here to see
           </Link>
           </div>
           </div>
           
           
           
           
      </>
   );
}

 export default Photographer;