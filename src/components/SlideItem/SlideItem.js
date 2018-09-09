import React from 'react';
import PropTypes from 'prop-types';
import './SlideItem.css';

export default function SlideItem(props){
	return (
			<div className="slide-item-container" style={{width: props.width}}>
              <div className="slider-item-box" style={{backgroundImage: `url(${props.image})`, height: props.height}}></div>
              <div className="slider-item-details">
              	<span>{props.subtitle}</span>
              	<h1>{props.title}</h1>
              </div>
            </div>
		);
};

SlideItem.propTypes = {
	width: PropTypes.number,
	image: PropTypes.string,
	height: PropTypes.number,
	title: PropTypes.string,
	subtitle: PropTypes.string
};