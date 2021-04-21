import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './movie.css';

class movie extends Component {
    
    static propTypes={
        title:PropTypes.string,
        poster:PropTypes.string
    }
    render() {
        return (
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h2>{this.props.title}</h2>
                
            </div>
        );
    }
}

class MoviePoster extends Component{
    static propTypes={
        poster:PropTypes.string.isRequired
    }
    render(){
        return(
            <img src={this.props.poster}/>
        )
    }
}

export default movie;
