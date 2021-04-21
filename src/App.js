import { Component } from 'react';
import './App.css';
import movie from './movie';
import Movie from './movie'

// Render: componentWillMount() -> render() -> compoenetDidMount()
// Update: componentWillReciveProps() {컴포넌트가 새로운 props를 받았다} -> shouldCompoenentUpdate() 
class App extends Component {
  state={
    movies:[
      {
        title:'frozen2',
        poster:'https://i.pinimg.com/originals/95/13/d3/9513d3d862a31ba2a505e2f98e64f346.jpg'
      },
      {
        title:'Soul',
        poster:'https://www.robertfantozzi.com/wp-content/uploads/2020/12/Soul1.jpg'
      }
      
    ]
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        movies:[
          ...this.state.movies,
          {
            title:'insideout',
            poster:'http://ticketimage.interpark.com/Movie/still_image/V15/V1501448p_s01.gif'
          }
        ]
      })
    },2000)
  }
  render(){
    return (
        <div className="App">
          {
            this.state.movies.map((movie,index) =>{
            return  <Movie title={movie.title} poster={movie.poster} key={index}/>
            })
          }
        </div>
      );
  }
}

export default App;