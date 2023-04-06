
import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'


function Testimonial() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slideToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slideToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ]
    }
    return (
        <Slider {...settings}>
            <div className="testimonial py-4 px-3">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est non voluptates rerum deserunt quaerat corrupti itaque repudiandae! Provident ullam facilis sint, rerum accusamus, doloremque consectetur voluptate necessitatibus facere voluptas id?
                </p>
                <div className="d-flex align-items-center gap-4 mt-3"></div>
                <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Rafik S</h6>
                    <p>Customer</p>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est non voluptates rerum deserunt quaerat corrupti itaque repudiandae! Provident ullam facilis sint, rerum accusamus, doloremque consectetur voluptate necessitatibus facere voluptas id?</p>
                <div className="d-flex align-items-center gap-4 mt-3"></div>
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Aymen Yakoubi</h6>
                    <p>Customer</p>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est non voluptates rerum deserunt quaerat corrupti itaque repudiandae! Provident ullam facilis sint, rerum accusamus, doloremque consectetur voluptate necessitatibus facere voluptas id?</p>
                <div className="d-flex align-items-center gap-4 mt-3"></div>
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Arbi Kamkoum</h6>
                    <p>Customer</p>
                </div>
            </div>

            <div className="testimonial py-4 px-3">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est non voluptates rerum deserunt quaerat corrupti itaque repudiandae! Provident ullam facilis sint, rerum accusamus, doloremque consectetur voluptate necessitatibus facere voluptas id?
                </p>
                <div className="d-flex align-items-center gap-4 mt-3"></div>
                <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Aymen Bougeh</h6>
                    <p>Customer</p>
                </div>
            </div>

            
        </Slider>
    )
}

export default Testimonial
