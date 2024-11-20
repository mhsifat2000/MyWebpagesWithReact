import classes from "../styles/Layout.module.css";
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

export default function Layout({ children }) {
  return (
    <>
      <Navbar/>
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
      <Footer/>
    </>
  );
}
