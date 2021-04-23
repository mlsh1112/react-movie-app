import { Component } from 'react';
import './App.css';
import Movie from './movie'

// Render: componentWillMount() -> render() -> compoenetDidMount()
// Update: componentWillReciveProps() {컴포넌트가 새로운 props를 받았다} -> shouldCompoenentUpdate()
class App extends Component {
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
    //fetch라는 promise를 return 한ㄷㅏ.
    return fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    .then(res=>res.json())
    .then(json=>json.data.movies)
    .catch(err=>console.log(err))
  }

  _renderMoives = () => {
    //index를 사용하면 느리다 id로 사용
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

  render(){
    return (
        <div className="App">
          {this.state.movies ? this._renderMoives():'Loading'}
        </div>
      );
  }
}

export default App;
