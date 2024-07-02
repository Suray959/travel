import React, { useState } from 'react';
import style from "../Ticket/Ticket.module.css";

const Ticket = () => {
  const [isSectionVisible, setSectionVisible] = useState(false);

  const handleSearchClick = () => {
    setSectionVisible(true);
  };

  const handleOkClick = () => {
    setSectionVisible(false);
  };

  return (
    <div className={style.main}>
        <div className={style.body}>
      {!isSectionVisible ? (
        <div className={style.card}>
          <h2>Buy Ticket</h2>
          <input className={style.name} type="text" placeholder='Write Surname and name' />
          <div className={style.trip}>
            <h4>Where would you want to go?</h4>
            <label><input type="radio" name="tripType" /> Round Trip</label>
            <label><input type="radio" name="tripType" /> One Way</label>
          </div>
          <div className={style.road}>
            <input type="text" placeholder='From' />
            <input type="text" placeholder='To' />
            <div className={style.choose}>
              <input type="date" name="date" />
              <input type="text" placeholder='Passengers' />
            </div>
          </div>
          <div className={style.carriage}>
            <h5>Choose a carriage</h5>
            <div className={style.radio}>
              <label><input type="radio" name="carriage" /> No 01 </label>
              <label><input type="radio" name="carriage" /> No 02 </label>
              <label><input type="radio" name="carriage" /> No 03 </label>
              <label><input type="radio" name="carriage" /> No 04 </label>
            </div>
            <div className={style.class}>
            <label><input type="radio" name="economy" /> Economy </label>
              <label><input type="radio" name="economy" />Business </label>
            </div>
          </div>
          <div className={style.price}>
            <h4>The price of the flight</h4>
            <div className={style.num}>
            <input type="text" placeholder='$'/>
        
            </div>
          
          </div>
          <button className={style.button} onClick={handleSearchClick}>Submit</button>
        </div>
      ) : (
        <section className={style.thank}>
          <h2>Thank you for choosing us!</h2>
          <div className={style.paragraph}>
          <p >The next time you fly, you will get a <strong>20 percent</strong> discount from us</p>
          </div>
          <button onClick={handleOkClick}>Ok</button>
          
        </section>
      )}
    </div>
    </div>
  
  );
};

export default Ticket;
