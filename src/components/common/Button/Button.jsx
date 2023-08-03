import React from 'react';
import './style.css'

const Button = ({title}) => {
    return (
        <>
           <button className='custom-button' type="submit">{title}</button>
        </>
    );
};

export default Button;