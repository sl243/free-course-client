import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    style={{ height: '500px' }}
                    className="d-block w-100"
                    src="https://i.ibb.co/85fz3Tj/Introductionto-Web-Development-22b149d49c.png"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '500px' }}
                    className="d-block w-100"
                    src="https://i.ibb.co/Wx7CvDK/8aedba3b.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '500px' }}
                    className="d-block w-100"
                    src="https://i.ibb.co/6tvscQf/Python-Thumbnail-b6e99c74df.png"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '500px' }}
                    className="d-block w-100"
                    src="https://i.ibb.co/dWYDp1m/oop-1.png"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '500px' }}
                    className="d-block w-100"
                    src="https://i.ibb.co/N3tPccW/gr-comput-neurosc-peq-1.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '500px' }}
                    className="d-block w-100"
                    src="https://i.ibb.co/gPzbQZJ/Mongo-DB-Featured-image.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;