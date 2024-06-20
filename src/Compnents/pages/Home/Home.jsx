import React from 'react';
import style from './Home.module.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className={style.body}>
                                                                         {/* Japan Card */}
      <div className={style.flipcard}>
        <div className={style.flipcardInner}>
          <div className={style.flipcardFront}>
            
          <div className={style.back}>
              <img src="https://images.unsplash.com/photo-1494588024300-e9df7ff98d78?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D" alt="Japan Back" />
            </div>
         
          </div>
          <div className={style.flipcardBack}>
          


            <div className={style.card}>
              <div className={style.price}>
                <p><strong> Ticket : </strong> 4500 $</p>
              </div>
              <div className={style.image}>
                <img src="https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Japan" />
              </div>
              <h3>Japan</h3>
              <button className={style.button}><Link to="/Ticket">Add</Link></button>
            </div>
          </div>
        </div>
      </div>
                                                                        {/* South Korea Card */}
      <div className={style.flipcard}>
        <div className={style.flipcardInner}>
          <div className={style.flipcardFront}>

          <div className={style.back}>
              <img src="https://images.unsplash.com/photo-1538670178144-b8db27bad945?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="South Korea Back" />
            </div>
          
          </div>
          <div className={style.flipcardBack}>
        
            <div className={style.card}>
              <div className={style.price}>
                <p><strong> Ticket : </strong> 4500 $</p>
              </div>
              <div className={style.image}>
                <img src="https://i.pinimg.com/736x/76/8c/f6/768cf630031039f94a9693d911af0959.jpg"  />
              </div>
              <h3>South Korea</h3>
              <button className={style.button}><Link to="/Ticket">Add</Link></button>
            </div>
          </div>
        </div>
      </div>
                                                                        {/* Thailand Card */}
      <div className={style.flipcard}>
        <div className={style.flipcardInner}>
          <div className={style.flipcardFront}>
          <div className={style.back}>
              <img src="https://images.unsplash.com/photo-1535117399959-7df1714b4202?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Thailand Back" />
            </div>
          </div>
          <div className={style.flipcardBack}>
         

            <div className={style.card}>
              <div className={style.price}>
                <p><strong> Ticket : </strong> 4500 $</p>
              </div>
              <div className={style.image}>
                <img src="https://images.squarespace-cdn.com/content/v1/63a162ea8ae00d39baefb4ff/1688442317812-G81FUL2BNJ7L5RZP5TKA/image-asset.jpeg" alt="Thailand" />
              </div>
              <h3>Thailand</h3>
              <button className={style.button}><Link to="/Ticket">Add</Link></button>
            </div>
          </div>
        </div>
      </div>
                                                                         {/* France Card */}
      <div className={style.flipcard}>
        <div className={style.flipcardInner}>
          <div className={style.flipcardFront}>
          <div className={style.back}>
              <img src="https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
            </div>
          </div>
          <div className={style.flipcardBack}>
      

            <div className={style.card}>
              <div className={style.price}>
                <p><strong> Ticket : </strong> 4500 $</p>
              </div>
              <div className={style.image}>
                <img src="https://images.unsplash.com/photo-1570097703229-b195d6dd291f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D" alt="France" />
              </div>
              <h3>France</h3>
              <button className={style.button}><Link to="/Ticket">Add</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
