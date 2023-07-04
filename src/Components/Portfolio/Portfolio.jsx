import React from 'react'
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react'
import Complaint from '../../assets/Complaint.png'
import Student from '../../assets/Student.png'
import trip from '../../assets/qtrip.jpg'
import portfolio from '../../assets/portfolio.png'
import 'swiper/css';

const Portfolio = () => {
    return (
        <div className="portfolio" id='Portfolio'>
            {/* Heading */}
            <span>My Projects</span>
            <span>Portfolio</span>

            {/* Slider */}
            <Swiper 
            spaceBetween={20}
            slidesPerView={3}
            grabCursor={true}
            className='portfolio-slider'
            >
                <SwiperSlide>
                    <img src={Complaint} alt="Slide 1" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Student} alt="Slide 2" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={trip} alt="Slide 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={portfolio} alt="Slide 3" />
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Portfolio 