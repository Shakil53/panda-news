import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Design1 from '../../Assets/Images/Artboard 1.png';
import Design2 from '../../Assets/Images/Design 1.jpg';
import Design3 from '../../Assets/Images/Gym Wear.jpg';
import Design4 from '../../Assets/Images/T shirt design-01.jpg';
import Design5 from '../../Assets/Images/book cover design city.jpg';
import Design6 from '../../Assets/Images/creative awesome typography t shirt design-01.jpg';
import Design7 from '../../Assets/Images/t shirt 3.jpg';
import Design8 from '../../Assets/Images/t shirt design jpg.jpg';
import Design9 from '../../Assets/Images/Artboard 1.png';

const BrandCalrosle = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Design1}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Design2}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Design3}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Design4}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Design5}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Design6}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Design7}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Design8}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Design9}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Design1}
                    alt="Second slide"
                />


            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Design5}
                    alt="Third slide"
                />


            </Carousel.Item>
        </Carousel>
    );
};

export default BrandCalrosle;