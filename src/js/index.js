//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";
// Import necessary Font Awesome components
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Initialize the library with the icons you want to use
library.add(faClock);

//import your own components
function SimpleCounter(props){
    return(
        <div className='container'>
            <div className='clock'><FontAwesomeIcon icon={faClock}/></div>
            <div className='sixth'>{props.SixthDigit % 10}</div>
            <div className='fifth'>{props.FifthDigit % 10}</div>
            <div className='fourth'>{props.FourthDigit % 10}</div>
            <div className='third'>{props.ThirdDigit % 10}</div>
            <div className='second'>{props.SecondDigit % 10}</div>
            <div className='first'>{props.FirstDigit % 10}</div>
        </div>
    )
}
SimpleCounter.PropTypes = {
    FirstDigit: PropTypes.number,
    SecondDigit: PropTypes.number,
    ThirdDigit: PropTypes.number,
    FourthDigit: PropTypes.number,
    FifthDigit: PropTypes.number,
    SixthDigit: PropTypes.number
}
let counter = 0;
    setInterval(function(){
        const sixth = Math.floor(counter/100000);
        const fifth = Math.floor(counter/10000);
        const fourth = Math.floor(counter/1000);
        const third = Math.floor(counter/100);
        const second = Math.floor(counter/10);
        const first = Math.floor(counter/1);
        console.log(sixth, fifth, fourth, third, second, first)
        counter++
        ReactDOM.render(<SimpleCounter FirstDigit={first} SecondDigit={second} ThirdDigit={third} FourthDigit={fourth} FifthDigit={fifth} SixthDigit={sixth} />, document.querySelector("#app"));
    },1000)
//render your react application

