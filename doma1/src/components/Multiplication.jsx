import React from 'react';
import "./../assets/css/Multiplication.css";


export const Multiplication = (props) => {
    return (
        <div id="multiplication">
            <p className='result_multi'>Result of {props.a} * {props.b} = {props.a * props.b}</p>
        </div>
    );
}