import { Component } from 'react';
import './App.css';
import Movie from './movie'

// Render: componentWillMount() -> render() -> compoenetDidMount()
// Update: componentWillReciveProps() {컴포넌트가 새로운 props를 받았다} -> shouldCompoenentUpdate()
class App extends Component {
  state={}
  
  //작은 function들이 각기 다른 장소에 있는 것이 좋음
  componentDidMount(){
    this._getMovies();
  }

  _getMovies=  async ()=>{ // 이전 라인의 작업이 끝날때까지 기다리는 것이 아닐 때 / 순서와 상관없이 진행된다
    const movies = await this._callApi(); 
    //await는 call api 기능이 끝나는 것을 기다린다. -> 성공적으로 수행이 아닌 그냥 끝나기만을 기다림
    this.setState({
      movies : movies
    }) // call api 작업이 끝날 때 까지 실행되지 않는다.


  }

  _callApi=()=>{
    //fetch라는 promise를 return 한ㄷㅏ.
    return fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
    .then(res=>res.json())
    .then(json=>json.data.movies)
    .catch(err=>console.log(err))
  }

  _renderMoives = () => {
    const movies= this.state.movies.map((movie,index) =>{
      return < Movie title={movie.title} poster={movie.large_cover_image} key={index} />
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
