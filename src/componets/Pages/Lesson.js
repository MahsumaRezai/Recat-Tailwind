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
                <div className="cart p-4">
                    <h4 className="text-xl font-semibold tracking-tight text-blue-600 text-left">
                        WHAT IS HTML ?
                      </h4>
                    <p className="mb-2 leading-normal text-left">
                    HTML is a markup language that defines the structure of your content. HTML consists of a series of elements, which you use to enclose, or wrap, different parts of the content to make it appear a certain way, or act a certain way. The enclosing tags can make a word or image hyperlink to somewhere else, can italicize words, can make the font bigger or smaller, and so on. 
                     </p>

                </div>
            </div>
            <div className=" rounded-lg shadow-md lg:max-w-sm shadow-xl  shadow-gray-100 mb-2 ">
                <div className={classes.bcakimgtwo}>
                </div>
                <div className="cart p-4">
                    <h4 className="text-xl font-semibold tracking-tight text-blue-600 text-left">
                        WHAT IS CSS ?
                      </h4>
                    <p className="mb-2 leading-normal text-left">
                    As we have mentioned before, CSS is a language for specifying how documents are presented to users — how they are styled, laid out, etc.

A document is usually a text file structured using a markup language — HTML is the most common markup language, but you may also come across other markup languages such as SVG or XML.
                     </p>

                </div>
            </div>
            <div className=" rounded-lg shadow-md lg:max-w-sm shadow-xl  shadow-gray-100 mb-2 ">
                <div  className={classes.bcakimgthree}>

                </div>
                <div className="cart p-4">
                    <h4 className="text-xl font-semibold tracking-tight text-blue-600 text-left">
                        WHAT IS JAVASCRIPT ?
                      </h4>
                    <p className="mb-2 leading-normal text-left">
                    The JavaScript programming language is text-based and can be used on both client and server-side. It controls multimedia within web pages and allows them to become interactive. JavaScript empowers a developer to do many things like adding animation to images or updating content automatically on a page. 

JavaScript is what allows you to interact with the vast majority of web pages that you visit. Whether it’s filling out forms, scrolling through maps, or registering for an event, it’s most likely that JavaScript programming is what’s allowing you to do it. 
                     </p>

                </div>
                
            </div>

        </Slider>
    );
};

export default Lesson;