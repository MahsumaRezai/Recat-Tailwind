import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classes from './Lesson.module.css';



const Lesson = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        style: {
            marginTop: '20px',
            marginBottom: '50px',
        },
    };

    return (
        <Slider {...settings} className= {classes.card}>
            <div className=" flex flex-row justift-center items-center rounded-lg shadow-md lg:max-w-sm shadow-xl 
             shadow-gray-100 mb-2   ">
                <div className={classes.bcakimg}>

                </div>
                <div className="p-4">
                    <h4 className="text-xl font-semibold tracking-tight text-blue-600 text-right">
                        علی قوچانی
                      </h4>
                    <p className="mb-2 leading-normal text-right">
                        مدرس PHP
                     </p>

                </div>
            </div>
            <div className=" rounded-lg shadow-md lg:max-w-sm shadow-xl  shadow-gray-100 mb-2 ">
                <div className={classes.bcakimgtwo}>


                </div>
                <div className="p-4">
                    <h4 className="text-xl font-semibold tracking-tight text-blue-600 text-right">
                        علی قوچانی
                      </h4>
                    <p className="mb-2 leading-normal text-right">
                        مدرس PHP
                     </p>

                </div>
            </div>
            <div className=" rounded-lg shadow-md lg:max-w-sm shadow-xl  shadow-gray-100 mb-2 ">
                <div  className={classes.bcakimgthree}>

                </div>
                <div className="p-4">
                    <h4 className="text-xl font-semibold tracking-tight text-blue-600 text-right">
                        علی قوچانی
                      </h4>
                    <p className="mb-2 leading-normal text-right">
                        مدرس PHP
                     </p>

                </div>
            </div>

        </Slider>
    );
};

export default Lesson;