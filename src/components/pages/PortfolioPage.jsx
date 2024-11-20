import Home from '../../styles/Home.module.css';
import web from '../../styles/Web.module.css';
import my from '../../assets/Images/my.jpeg'
function PortfolioPage(){
     return (
         <>
           
           <div>
    <h1 className={web.h1}> My Portfolio </h1>
   </div>
   <div className={Home.portfolioImg}>
       <img src={my} alt="Not found"/>
   </div>
   <div className={Home.paragraph}>
    My name is <b><i>Mahmudul Hasan Sifat.</i> </b>I am a student of class twelve in <a href="" className={web.link}>Govt.Science College.</a>
    </div>
           
       </>
         
          );
}
export default PortfolioPage;