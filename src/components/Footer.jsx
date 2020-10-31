import React from 'react';

const date = new Date().getFullYear();

const Footer = () => {
    return (
    <div className='copyright'>
        <p><i className="far fa-copyright"></i> {date} - Abel Zambrano</p>
    </div>
    )
}

export default Footer;