import web from '../styles/Web.module.css'

function Footer() { // Capitalize component name
  return (
    <div> {/* Single root element */}
<footer >
    <div>
       <p className={web.con}> Contacts </p>
        <ul>
            <li>
                 <i class="fa-brands fa-facebook"></i>
                    <button className={web.fb}>
                   <a href="https://www.facebook.com/mahmudulhasan.sifat.90?mibextclass=ZbWKwL" className={web.link}> Facebook </a>
                    </button>
            </li>
            <li>
                    <button className={web.yt}>
                       <a href="https://youtube.com/@mhsifat?si=aDu2IoTE-J32nYu7" className={web.link}> YouTube
                       </a> 
                    </button>
            </li>
        </ul>
        <p className={web.copy}>Mh Sifat || Copyright &copy; 2024</p>
</div>
</footer> 
    </div>
  );
}

export default Footer;
