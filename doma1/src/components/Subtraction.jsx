import React from 'react';
import "./../assets/css/Subtraction.css";


export const Subtraction = (props) => {
    return (
        <div id="subtraction">
            <p className='result_sub'>Result of {props.a} - {props.b} = {props.a - props.b}</p>
        </div>
    );
}