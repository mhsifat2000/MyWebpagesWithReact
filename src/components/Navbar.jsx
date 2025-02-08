import {Link} from 'react-router-dom';
import classes from '../styles/Navbar.module.css';
import TheamSwicher from './TheamSwicher.jsx';
import Account from './Account.jsx';

function Navbar() { 
  return (
    <> 
      <div className={classes.header}>
        <div className={classes.part1}>
           <div className={classes.brandingBox}>
             <h1 className={classes.branding}>
             <span className={classes.highlight}>Sifat's</span> First Website
             </h1>
           </div>
           <div className={classes.accoutCenter}>
             <Account className={classes.account}/>
             <TheamSwicher className={classes.TheamSwiche}/>
           </div>
           
        </div>
        <div className={classes.part2}>
           <div className={classes.navigation}>
          <div className={classes.btn}>
            <Link to="/">Home</Link>
          </div>
          <div className={classes.btn}>
                <Link to="/MenuPage">Menu</Link>
          </div>
          <div className={classes.btn}>
              <Link to="/PortfolioPage">Portfolio</Link>
          </div>
           </div>
        </div>
        
      </div>
    </>
  );
}

export default Navbar;
