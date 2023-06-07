import React from "react";
import "./project.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Sliders from './Sliders/Sliders';

import sliderData from '../../sliderData';


const Project = () => {



    return (
    <>
        <Sliders sliderData={sliderData} />
    </>

    );
}

export default Project;