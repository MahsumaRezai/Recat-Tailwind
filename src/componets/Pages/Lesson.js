
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fragment } from "react";
import React from "react";
import classes from './Lesson.module.css'
import Slider from "react-slick";

const Lesson =(props)=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        style: {
            marginTop: '20px',
            marginBottom: '50px',
        },
      };
    return (
        <Fragment>
            
            <Slider {...settings}  className={classes.card} >
            <div className={classes.box}>
                <h3>1</h3>
            </div>
            <div className={classes.box}>
                <h3>2</h3>
            </div>
            <div className={classes.box}>
                <h3>3</h3>
            </div>
            
    </Slider>
        </Fragment>
    )
}
export default Lesson;