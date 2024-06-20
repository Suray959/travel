import React ,{ useState }   from 'react';
import style from '../Popular/Popular.module.css';
import {Link} from 'react-router-dom'

function Popular() {

  return (
    <div className={style.main}>
  
  <h3> The most visited countries of our customers </h3>

<div className={style.section1}>

<div className={style.body}>
      <div className={style.barcelona}>
        <div className={style.article}>
          <p><strong>  Sri Lanka : </strong>
          Despite its small size, Sri Lanka possesses a high level of biodiversity and wildlife resources and is rated among the 34 biodiversity hotspots in the world.
           Many species of flora and fauna are indigenous to Sri Lanka.
          </p>
        </div>
        <div className={style.container}>
          <img className={style.image1} src="https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <img className={style.image2} src="https://images.unsplash.com/photo-1574611122955-5baa61496637?q=80&w=2304&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
          <img className={style.image3} src="https://images.unsplash.com/photo-1582103517762-613cc237349b?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
        </div>

      </div>
      <div className={style.button}>
      <button className={style.button}><Link to="/Ticket">Get ticket </Link></button>
      </div>
    </div>


    <div className={style.body}>
      <div className={style.barcelona}>
        <div className={style.article}>
          <p><strong>  New Zealand : </strong>
          The first people to reach New Zealand were Polynesians in ocean going waka (canoes). Their arrival likely occurred in several waves, 
          approximately between 1280 and 1350 CE.Those Polynesian settlers, isolated in 
          </p>
        </div>
        <div className={style.container}>
          <img className={style.image1} src='https://i.pinimg.com/originals/e0/cb/c5/e0cbc508796c2af24357b5f056aa2bdb.jpg' />
          <img className={style.image2} src='https://www.theroadtrip.co.nz/wp-content/uploads/2019/04/bay-of-islands-airborne-view.jpg'  />
          <img className={style.image3} src='https://images.unsplash.com/photo-1586030531684-56f0b42e4b1a?q=80&w=2779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  />
        </div>

      </div>
      <div className={style.button}>
      <button className={style.button}><Link to="/Ticket">Get ticket </Link></button>
      </div>
    </div>





<div className={style.body}>
      <div className={style.barcelona}>
        <div className={style.article}>
          <p><strong>  Brazil : </strong>
          Despite continuing record breaking of international tourism revenues,
          the number of Brazilian tourists travelling overseas has been growing steadily since 2003, resulting in a net negative foreign exchange balance,
          </p>
        </div>
        <div className={style.container}>
          <img className={style.image1} src='https://images.unsplash.com/photo-1635430429732-c933816f5dca?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          <img className={style.image2} src='https://images.unsplash.com/photo-1620218776119-2bc322e2d7ad?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
          <img className={style.image3} src='https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  />
        </div>

      </div>
      <div className={style.button}>
      <button className={style.button}><Link to="/Ticket">Get ticket </Link></button>
      </div>
    </div>

</div>




<div className={style.section2}>


<div className={style.body}>
      <div className={style.barcelona}>
        <div className={style.article}>
          <p><strong>Barcelona Spain : </strong>
            Barcelona is a city on the coast of northeastern Spain. It is the capital and largest city of the autonomous community of Catalonia, as well 
            as the second most populous municipality of Spain.
          </p>
        </div>
        <div className={style.container}>
          <img className={style.image1} src="https://images.unsplash.com/photo-1534001265532-393289eb8ed3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhcmNlbG9uYSUyMGZhbW91cyUyMHBsYWNlfGVufDB8fDB8fHww" alt="Barcelona 1" />
          <img className={style.image2} src="https://images.unsplash.com/photo-1635412000995-f3980d4037d1?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Barcelona 2" />
          <img className={style.image3} src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFyY2Vsb25hfGVufDB8fDB8fHww" alt="Barcelona 3" />
        </div>

      </div>
      <div className={style.button}>
      <button className={style.button}><Link to="/Ticket">Get ticket </Link></button>
      </div>
    </div>


    <div className={style.body}>
<div className={style.roma}>
<div className={style.article}>
  <p><strong> Rome Italy : </strong>Modern and old, past and present go side by side, all the time. Whether you are in Rome for 3 days, 3 weeks or 3 months,
be prepared to step into the world’s biggest open air museum.
</p>
</div>
<div className={style.container}> 
  <img className={style.image1} src="https://images.unsplash.com/photo-1569230516306-5a8cb5586399?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9tYSUyMGZhbW91cyUyMHBsYWNlfGVufDB8fDB8fHww" />
  <img className={style.image2} src="https://plus.unsplash.com/premium_photo-1693256458375-f7822de0cdbb?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9tYSUyMGZhbW91cyUyMHBsYWNlfGVufDB8fDB8fHww"  />
  <img className={style.image3} src="https://images.unsplash.com/photo-1596627116790-af6f46dddbda?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
</div>
</div>

<div className={style.button}>
      <button className={style.button}><Link to="/Ticket">Get ticket </Link></button>
      </div>

</div>


<div className={style.body}>
    <div className={style.paris}>
<div className={style.article}>
  <p><strong> Paris France : </strong>
Paris, situated on the river Seine, is the capital and largest city in France. It is one of the most iconic cities in the world and 
it is considered one of the most beautiful and romantic cities, 
</p>
</div>
<div className={style.container}> 
  <img className={style.image1} src='https://images.unsplash.com/photo-1570097703229-b195d6dd291f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D' />
  <img className={style.image2} src="https://images.unsplash.com/photo-1551634979-2b11f8c946fe?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D" />
  <img className={style.image3} src='https://images.unsplash.com/photo-1581683705068-ca8f49fc7f45?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  />
</div>
</div>


<div className={style.button}>
      <button className={style.button}><Link to="/Ticket">Get ticket </Link></button>
      </div>
</div>

</div>

    </div>



  );
}

export default Popular;
