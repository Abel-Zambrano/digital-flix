import React from 'react';

const Movie = (props) => {
    return (
        <div className='movie-card'>
            <h2 className='card-title'>{props.title}</h2>
            <h5 className='card-year'>Release Date: {props.year}</h5>
            <img className='card-image' src={props.image} alt="" />
        </div>
    )
}

export default Movie;