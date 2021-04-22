import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './movie.css';

function movie({title,poster}){
    return(
        <div>
                <MoviePoster poster={poster}/>
                <h2>{title}</h2>
                
        </div>
    )
}

//dump component
//funtional component -> no state / no renser / no life cyle/ onlt return
function MoviePoster({poster}){
    return(
        <img src={poster}/>
    )
}
movie.propTypes={
    title:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired
}

MoviePoster.propTypes={
    poster:PropTypes.string.isRequired
}
export default movie;
