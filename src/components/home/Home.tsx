import React from 'react';
import './Home.css';
import Slider from 'react-slick';

// Import slick-carousel CSS
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      image: '/photos/slide1.jpg',
      caption: 'Zion National Park, 2022',
    },
    {
      image: '/photos/slide2.jpg',
      caption: 'Utah, 2021',
    },
    {
        image: '/photos/slide4.jpg',
        caption: 'South Dakota, 2022',
      },
  ];

  return (
    <div className="home-container">
      {/* Top Half */}
      <div className="hero-section">
        <h1 className="main-title">KADEN CASANAVE</h1>
        <h2 className="subtitle">Software Engineer</h2>
      </div>

      {/* Bottom Half - Slideshow */}
      <div className="slideshow-section">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slide-container">
              <img src={slide.image} alt={`Slide ${index + 1}`} />
              <div className="overlay">
                <div className="caption">{slide.caption}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

