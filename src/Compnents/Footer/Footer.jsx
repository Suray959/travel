import React from 'react'
import style from '../Footer/Footer.module.css'



function Footer() {
  return (
    <div className={style.body}>
      <div className={style.footer}>

        <div className="info">
        <ul className={style.contact}>
          <h3>Contact us</h3>

      <div className={style.phone}>
          <img src="https://cdn-icons-png.flaticon.com/128/126/126509.png"  />
          <li> (+994)125998899</li>
          </div>
      <div className={style.phone}>
      <img src="https://cdn-icons-png.flaticon.com/128/160/160200.png"  />
          <li> (+994)992722227</li>
      </div>
          
      <div className={style.phone}>
      <img src="https://cdn-icons-png.flaticon.com/128/546/546394.png"  />
          <li> web@sry.az</li>
      </div>

        </ul> 
        </div>
      

        <div className={style.icon}>
        <img src="https://cdn-icons-png.flaticon.com/128/15713/15713420.png" />
        <img src="https://cdn-icons-png.flaticon.com/128/3991/3991775.png" />
        <img src="https://cdn-icons-png.flaticon.com/128/732/732200.png" />
      </div>

      </div>

   
    </div>
  )
}

export default Footer
