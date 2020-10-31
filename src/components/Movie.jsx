import React from 'react';

const Movie = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <h5>{props.about}</h5>
            <img src={props.image} alt="" />
      </div>
    )
}

export default Movie;