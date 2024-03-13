import React from 'react';
import "./../assets/css/Division.css";


export const Division = (props) => {
    return (
        <div id="division">
            <p className='result_division'>Result of {props.a} / {props.b} = {props.a / props.b}</p>
        </div>
    );
}