import "../../styles/App.css"
import web from '../../styles/Web.module.css'
import Home from '../../styles/Home.module.css';
import pic1 from '../../assets/Images/pic1.jpg'; 


function HomePage() { // Capitalize component name
  return (
      <>
      
      
      <h1 className={web.h1}>
        Bio Data
      </h1>
      <div className={Home.box}>
        <img src={pic1} alt="not found!" /> 
      </div>               
      <div className={Home.paragraph}>   
      <p>
        My name is Mahmudul Hasan Sifat. I am a student. I live in
         <a href="https://www.google.com/search?q=Dhaka" className={web.link}> Dhaka</a>
             , the capital city of  
             <a href="https://en.m.wikipedia.org/wiki/Bangladesh" className={web.link}> Bangladesh.</a>
                  It is not my home distinct. I am from <a href="https://en.m.wikipedia.org/wiki/Barguna_Districtm" className={web.link}> Barguna </a> in <a href="https://en.wikipedia.org/wiki/Barisal" className={web.link}> Barishal. </a>
                              I started my education at 
<i> Sunbim kindergarden school.</i> After a year I
 got admitted in  <i>Kaunia Govt. Primary School. 
 </i> In 2016 I had passed my  <a href="https://en.m.wikipedia.org/wiki/Primary_Education_Completion" className={web.link}>
     Primary Education Completion(PEC) exam.</a>
      I got 
      <a href="https://en.m.wikipedia.org/wiki/Academic_grading_in_Bangladesh" className={web.link}> GPA-5   </a>
       in this exam. This was the first public exam in my life.
      </p> 
      <p>
Then I had pass my <a href="https://en.wikipedia.org/wiki/Junior_School_Certificate" className={web.link}>Junior School Certificate (JSC)</a> Exam in 2019 from <a href="https://www.google.com/search?kgmclassName={web.}/g/1pp2vkn6q&hl=en-BD&q=Betagi+Government+Pilot+High+School&kgs=4c9a5df5113d947d&shndl=30&shem=labmtre,lsde,vslcca&source=sh/x/loc/osrp/m5/2" className={web.link}> Betagi Govt Pilot High School </a>. Also I passed my <a href="https://en.m.wikipedia.org/wiki/Secondary_School_Certificate" className={web.link}>Secondary School Certificate(SSC)</a> exam from the same institution in 2022. 
</p>
      </div>  
      
      </>
  );
}

export default HomePage;