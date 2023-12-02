import React, { useEffect } from 'react';
import './Results.css';

function Results(data) {
    console.log(data.message)

    return (
        <div className='Container'>
            <div className='Food_Container'>
                <div className='Food_Image'>
                    <img src='https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg' alt='Food'></img>
                </div>
                <div className='SmallDescription'>
                    <h2>{data.message}</h2>
                </div>
            </div>
        </div>
    );
}

export default Results;
