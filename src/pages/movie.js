import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './movie.css';

function movie({title,poster,genres,synopsis}){
    return(
        <div className="Movie">
            <div className="Movie_Column">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie_Column">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {
                        genres.map((genre,index)=>
                            <MovieGenre genre={genre} key={index}/>)
                    }
                </div>
                <p className="Movie_Synopsis"> 
                 <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                    />
                </p>
            </div>
        </div>
    )
}

//dump component
//funtional component -> no state / no renser / no life cyle/ onlt return
function MoviePoster({poster,alt}){
    return(
        <img src={poster} alt={alt} title={alt} className="Movie_poster"/>
    )
}
function MovieGenre({genre}){
    return(
        <span className="Movie_Genre">{genre} </span>
    )
}
movie.propTypes={
    title:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.array.isRequired,
    synopsis:PropTypes.string.isRequired
}

MoviePoster.propTypes={
    poster:PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired
}
export default movie;
