import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

const Slider = () => {
    return (
        <AwesomeSlider animation="cubeAnimation">
            <div data-src="https://www.androidauthority.com/wp-content/uploads/2018/08/learn-web-development.jpg" />
            <div data-src="https://www.androidauthority.com/wp-content/uploads/2018/08/learn-web-development.jpg" />
            <div data-src="https://www.androidauthority.com/wp-content/uploads/2018/08/learn-web-development.jpg" />
        </AwesomeSlider>
    );
};

export default Slider;