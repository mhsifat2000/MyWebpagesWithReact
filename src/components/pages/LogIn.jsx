import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from '../../styles/LogInPage.module.css';
import Button from '../Button';
import bg from '../../assets/Images/pexels-pixabay-268533.jpg';
import { useAuth } from "../../context/AuthContext.jsx";

function LoginForm() {
  const [isLogIn, setIsLogIn] = useState(false);

  const handleLogInClick = () => {
    setIsLogIn(true);
  };

  const handleSignUpClick = () => {
    setIsLogIn(false);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError(""); // Clear the error message

    try {
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError("Failed to login! Please check your email and password.");
    }
  }

  return (
    <div className={classes.container} style={{ backgroundImage: `url(${bg})` }}>
      <div className={classes.formBox}>
        <h1 className={classes.title}>{isLogIn ? 'Sign In' : 'Sign Up'}</h1>
        {isLogIn ? (
          <div className={classes.underline} style={{ transform: 'translateX(35px)' }} />
        ) : (
          <div className={classes.underline} style={{ transform: 'translateX(0px)' }} />
        )}

        <form className={classes.form} onSubmit={handleSubmit} action="#">
          <div className={classes.btnField}>
            <Button onClick={handleSignUpClick}>Sign Up</Button>
            <Button onClick={handleLogInClick}>Sign In</Button>
          </div>
          <div className={classes.inputGroup}>
            <div className={classes.inputField} style={{ maxHeight: isLogIn ? '0px' : '60px' }}>
              <i className="fa-solid fa-user"></i>
              <input type="text" placeholder="Name" />
            </div>
            <div className={classes.inputField}>
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={classes.inputField}>
              <i className="fa fa-key" aria-hidden="true"></i>
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p>
              <span className={classes.text}>
                {!isLogIn ? 'Password Suggestions' : 'Lost Password ?'}
              </span>
              <a href="#">click here</a>
            </p>
          </div>
          <div className={classes.btnField} style={{ justifyContent: 'center' }}>
            <Button disabled={loading} type="submit">
              SUBMIT
            </Button>
            {error && <p className="error">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
