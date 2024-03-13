import React from 'react';
import "./../assets/css/Addition.css";


export const Addition = (props) => {
    return (
        <div id="addition">
            <p className='result_add'>Result of {props.a} + {props.b} = {props.a + props.b}</p>
        </div>
    );
}