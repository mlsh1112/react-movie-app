import { Component } from 'react';
import './App.css';
import Movie from './movie'

// Render: componentWillMount() -> render() -> compoenetDidMount()
// Update: componentWillReciveProps() {컴포넌트가 새로운 props를 받았다} -> shouldCompoenentUpdate() 
class App extends Component {
  state={}
  
  componentDidMount(){
    fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    .then(res=>res.json())
    .then(json=>console.log(json))
    .catch(err=>console.log(err))
  }

  _renderMoives = () => {
    const movies= this.state.movies.map((movie,index) =>{
      return < Movie title={movie.title} poster={movie.poster} key={index} />
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
