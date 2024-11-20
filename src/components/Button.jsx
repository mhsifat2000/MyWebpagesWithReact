import React from 'react';
import classes from '../styles/Button.module.css';

const Button = ({ className, children, onClick }) => {
  return (
    <button className={`${classes.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
