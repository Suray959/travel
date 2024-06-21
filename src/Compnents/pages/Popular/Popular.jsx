import React from 'react';
import style from '../Popular/Popular.module.css';
import { Link } from 'react-router-dom';

function Popular() {
  return (
    <div className={style.body}>
      <div className={style.main}>
      <div className={style.head}>
        <h3>Plan your travels with us</h3>
      </div>
      <div className={style.btn}>
        <Link to='/adventure' className={style.button}>Adventure Countries</Link>
        <Link to='/romantic' className={style.button}>Romantic Countries</Link>
      </div>
      </div>
   
    </div>
  );
}

export default Popular;
