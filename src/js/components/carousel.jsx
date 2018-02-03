import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../css/carousel.scss';


export default class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ['Alan', 'John', 'Tom', 'Peter', 'Bob', 'Carry'],
    };
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    };

    return (
      <div id="carousel-page">
        <div className="c-wrapper">
          <Slider {...settings}>
            {this.state.items.map(item => <div className='c-item' key={item}><h3>{item}</h3></div>)}
          </Slider>
        </div>
      </div>
    );
  }
}
