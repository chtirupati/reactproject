import React from 'react';
import {Link} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'


const Slider = () => {
    return (<>
    <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://fmc.org.in/wp-content/uploads/2012/10/Twitter-Slider-Background.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://www.solomonedwards.com/wp-content/uploads/2018/09/OTC-slider.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.luxuo.com/2016/02/Singapore-expensive-city-slider.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


        {/* <div id="carouselExampleInterval" className="carousel slide " data-ride="carousel">

<div className="carousel-inner">
    <div className="carousel-item active" data-interval="10000">
        <img src="https://fmc.org.in/wp-content/uploads/2012/10/Twitter-Slider-Background.jpg" className="d-block w-100" alt="slider" />
    </div>
    <div className="carousel-item" data-interval="2000">
        <img src="https://www.solomonedwards.com/wp-content/uploads/2018/09/OTC-slider.jpg" className="d-block w-100" alt="slider" />
    </div>
    <div className="carousel-item">
        <img src="https://cdn.luxuo.com/2016/02/Singapore-expensive-city-slider.jpg" className="d-block w-100" alt="slider" />
    </div>
</div>
<Link className="carousel-control-prev" to="#carouselExampleInterval" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
</Link>
<Link className="carousel-control-next" to="#carouselExampleInterval" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
</Link>
</div> */}



   </> );
};

export default Slider;