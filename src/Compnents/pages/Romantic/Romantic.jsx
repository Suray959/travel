import React from 'react';
import style from '../Romantic/Romantic.module.css';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Romantic() {
  const destinations = [
    {
      title: 'Barcelona Spain',
      description: 'Barcelona is a city on the coast of northeastern Spain. It is the capital and largest city of the autonomous community of Catalonia, as well as the second most populous municipality of Spain.',
      images: [
        'https://images.unsplash.com/photo-1534001265532-393289eb8ed3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhcmNlbG9uYSUyMGZhbW91cyUyMHBsYWNlfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1635412000995-f3980d4037d1?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFyY2Vsb25hfGVufDB8fDB8fHww'
      ],
      buttonText: 'Get ticket'
    },
    {
      title: 'Rome Italy',
      description: 'Modern and old, past and present go side by side, all the time. Whether you are in Rome for 3 days, 3 weeks or 3 months, be prepared to step into the world’s biggest open-air museum.',
      images: [
        'https://images.unsplash.com/photo-1569230516306-5a8cb5586399?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9tYSUyMGZhbW91cyUyMHBsYWNlfGVufDB8fDB8fHww',
        'https://plus.unsplash.com/premium_photo-1693256458375-f7822de0cdbb?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9tYSUyMGZhbW91cyUyMHBsYWNlfGVufDB8fDB8fHww',
        'https://images.unsplash.com/photo-1596627116790-af6f46dddbda?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],
      buttonText: 'Get ticket'
    },
    {
      title: 'Paris France',
      description: 'Paris, situated on the river Seine, is the capital and largest city in France. It is one of the most iconic cities in the world and it is considered one of the most beautiful and romantic cities.',
      images: [
        'https://images.unsplash.com/photo-1570097703229-b195d6dd291f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
        'https://images.unsplash.com/photo-1551634979-2b11f8c946fe?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
        'https://images.unsplash.com/photo-1581683705068-ca8f49fc7f45?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ],
      buttonText: 'Get ticket'
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

export default Romantic;
