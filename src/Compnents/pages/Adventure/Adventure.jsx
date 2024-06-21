import React from 'react'
import style from '../Adventure/Adventure.module.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

function Adventure() {

const destinations=[
  {
    title: 'Sri Lanka',
    description:' Despite its small size, Sri Lanka possesses a high level of biodiversity and wildlife resources and is rated among the 34 biodiversity hotspots in the world.Many species of flora and fauna are indigenous to Sri Lanka.',
    images:[
      'https://images.unsplash.com/photo-1519566335946-e6f65f0f4fdf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1574611122955-5baa61496637?q=80&w=2304&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1582103517762-613cc237349b?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    buttonText:'Get ticket',
  },

  {
    title: ' Brazil',
    description:'Despite continuing record breaking of international tourism revenues,the number of Brazilian tourists travelling overseas has been growing steadily since 2003, resulting in a net negative foreign exchange balance,',
    images:[
      'https://images.unsplash.com/photo-1635430429732-c933816f5dca?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1620218776119-2bc322e2d7ad?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    ],
    buttonText:'Get ticket',
  },
  {
    title: ' New Zealand ',
    description:' The first people to reach New Zealand were Polynesians in ocean going waka (canoes). Their arrival likely occurred in several waves, approximately between 1280 and 1350 CE.Those Polynesian settlers, isolated in ',
    images:[
      'https://i.pinimg.com/originals/e0/cb/c5/e0cbc508796c2af24357b5f056aa2bdb.jpg',
      'https://www.theroadtrip.co.nz/wp-content/uploads/2019/04/bay-of-islands-airborne-view.jpg',
      'https://images.unsplash.com/photo-1586030531684-56f0b42e4b1a?q=80&w=2779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    buttonText:'Get ticket',
  }
];

const settings = {
  infinite: true,
  slidesToShow: 1,
};

return (
  <Slider {...settings}>
    {destinations.map((destination, index) => (
      <div key={index} className={style.body}>
        <div className={style.article}>
          <p className={style.p}><strong>{destination.title}:</strong> {destination.description}</p>
        </div>
        <div className={style.container}>
          <img className={style.image1} src={destination.images[0]} alt={`${destination.title} 1`} />
          <img className={style.image2} src={destination.images[1]} alt={`${destination.title} 2`} />
          <img className={style.image3} src={destination.images[2]} alt={`${destination.title} 3`} />
        </div>

        <button className={style.button}><Link to="/Ticket">{destination.buttonText}</Link></button>
     
      </div>
    ))}
  </Slider>
);

}

export default Adventure
