import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    };

    return (
      <Slider {...settings}>
        {this.state.items.map(item => <div key={item}><h3>{item}</h3></div>)}
      </Slider>
    );
  }
}
