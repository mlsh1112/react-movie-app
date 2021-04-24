import React, { Component } from 'react';
import Movie from './movie'
import './loading.css'
class loading extends Component {
    state={}
    componentDidMount(){
        this._getMovies();
      }
    
    _getMovies= async ()=>{ 
        const movies = await this._callApi(); 
        this.setState({
          movies : movies
      })
    }
    
      _callApi=()=>{
        return fetch('https://yts.mx/api/v2/list_movies.json?quality=3D')
        .then(res=>res.json())
        .then(json=>json.data.movies)
        .catch(err=>console.log(err))
      }
    
      _renderMoives = ({genre}) => {
          const movies=this.state.movies.filter(movie =>  movie.genres.includes(genre) == true )
          
          const filtermovies= movies.map(movie =>{
            return < Movie 
            title={movie.title_english} 
            poster={movie.medium_cover_image} 
            key={movie.id} 
            genres={movie.genres}
            synopsis={movie.synopsis}
            />
            })
          
          return filtermovies
      }
      _goHome = () =>{
        this.props.history.push('/')
      }
    render() {
        const genre=this.props.match.params.genre
        return (
            <div className={this.state.movies?'loadsucess':'loading'}>
                {
                    this.state.movies? <button onClick={this._goHome} className='btnhome'>Go Home</button> : <div></div>
                }
                
                <div className='movielist'>
                {
                    this.state.movies?
                    this._renderMoives(this.props.match.params)
                    :
                    `Looking for ${genre} Movies... 
                    Please wait`
                }
                </div>
            
            </div>
        );
    }
}

export default loading;
