import React from 'react';
import  '../loader/Loader.css'
import loader from '../loader/image 7.png'
function Loader() {
    return (
        <div className='loader'> 
        <img className='loader_img' src={loader} alt="loader"/>
        </div>
    );
}

export default Loader;