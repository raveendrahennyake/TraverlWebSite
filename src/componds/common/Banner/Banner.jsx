import React from 'react'
import './Banner.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import slider2 from '../../../assets/images/gallery/g1.jpg';
import slider1 from '../../../assets/images/slider/1.jpg';
import slider3 from '../../../assets/images/slider/2.png';
import slider4 from '../../../assets/images/slider/3.png';

import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div className='Banner'>
      <section className='slider'>
        <Carousel variant="dark">
          { <Carousel.Item className='slider1'>
            <img src={slider1} alt="..."></img>
            <Carousel.Caption>
            <div className="slider_des">
              <div className="slider1-details">
                <div className="slicer1-postions">
                  <h5 className="heading">
                  JOURNEY TO EXPLORE WORLD
                </h5>
                <p className="sub_text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                </div>
                
              </div>
                
              </div>
            </Carousel.Caption>
          </Carousel.Item> }
         
         {/* { <Carousel.Item className='selection2' >
            <img src={slider2} alt="..."></img>
            <Carousel.Caption>
            <div className="slider_des" >
              <div className="slicer-2-postions">
                 <h5 className="heading" id='slider2'>
                  JOURNEY TO <span>EXPLORE WORLD</span>
                </h5>
                <p className="sub_text">
                     Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                 
                </p>
              </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item> }

           { <Carousel.Item className='slection3'>
            <img src={slider3} alt="..."></img>
            <Carousel.Caption>
            <div className="slider_des">
                <h5 className="heading">
                  JOURNEY TO <span>EXPLORE WORLD</span>
                </h5>
                <p className="sub_text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item> }

          { <Carousel.Item className='slection4'>
            <img src={slider4} alt="..."></img>
            <Carousel.Caption>
            <div className="slider_des">
                <h5 className="heading">
                  JOURNEY TO <span>EXPLORE WORLD</span>
                </h5>
                <p className="sub_text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item> }  */}

        </Carousel>
      
      
        
        


      </section>

      
      
    </div>
  )
}

export default Banner
