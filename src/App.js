import React, { Component } from 'react';
import placeholder from './placeholder.png';
import './App.css';
import Header from './components/Header/Header';
import SlideItem from './components/SlideItem/SlideItem';

import "bootstrap-css-only/css/bootstrap-grid.min.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  className: "slider variable-width",
  dots: true,
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        className: 'mobile-view'
      }
    }
  ]
};

// data can also be pulled from HTTP requestz
const sliderData = [
  { title: "Test #1", subtitle: "Number 1", image: placeholder, width: 290, height: 500 },
  { title: "Test #2", subtitle: "Number 2", image: placeholder, width: 200, height: 500 },
  { title: "Test #3", subtitle: "Number 3", image: placeholder, width: 250, height: 500 },
  { title: "Test #4", subtitle: "Number 4", image: placeholder, width: 200, height: 500 },
  { title: "Test #5", subtitle: "Number 5", image: placeholder, width: 300, height: 500 },
  { title: "Test #6", subtitle: "Number 6", image: placeholder, width: 350, height: 500 },
  { title: "Test #7", subtitle: "Number 7", image: placeholder, width: 330, height: 500 }
];
const title = "MORE FOR YOUR KINGDOM";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      title,
      sliderData
    };
  }

  render() {
    return (
      <div className="App container">
        <Header title={title} />
        <Slider {...settings}>

          { this.state.sliderData.map(function(item, i){
              return (<SlideItem key={i} {...item} />);
            })}

        </Slider>
      </div>
    );
  }
}

export default App;
