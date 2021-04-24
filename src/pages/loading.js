import React, { Component } from 'react';
import Movie from './movie'
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
    
      _renderMoives = () => {
        const movies= this.state.movies.map(movie =>{
          return < Movie 
          title={movie.title_english} 
          poster={movie.medium_cover_image} 
          key={movie.id} 
          genres={movie.genres}
          synopsis={movie.synopsis}
           />
          })
          
          return movies
      }
    render() {
        return (
            <div>
                {
                    this.state.movies?this._renderMoives():'Loading'
                }
            </div>
        );
    }
}

export default loading;
