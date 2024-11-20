
import {Link} from 'react-router-dom';
import Home from '../../styles/Home.module.css';
import web from '../../styles/Web.module.css';
function MenuPage(){
     return (
         <>
           
           
           <div className={Home.menu}> 
           <button className={Home.baton1}>
           <a href="event.html">
            Events
           </a>
           </button>

           <button className={Home.baton1}>
            <a href="tic-tac-toe.html">Tic Tac Toe</a>
           </button> 

           <button className={Home.baton1}> 
            <Link to="/photographer">
                 Photographer
            </Link>
            </button>
    
           <button className={Home.baton1}>
            <a href="code.html">
                 Programmer
            </a>
             </button>
         
           <button className={Home.baton1}>
            <a href="gaming.html">
                     Gaming
            </a>
           </button>
         
           <button className={Home.baton1}>
             <a href="movie.html">
                  Movies & Shows
             </a>
                </button>
           </div>
           
           </>
    
          
      );
}
export default MenuPage;