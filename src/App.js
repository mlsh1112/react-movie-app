import { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Movie from './pages/movie'
import home from './pages/home';
import loading from './pages/loading'

// Render: componentWillMount() -> render() -> compoenetDidMount()
// Update: componentWillReciveProps() {컴포넌트가 새로운 props를 받았다} -> shouldCompoenentUpdate()
class App extends Component {
  render(){
    return (
        <div className="App">
          <BrowserRouter>
          <Route exact path='/' component={home}/>
          <Route exact path='/loading' component={loading}/>
          </BrowserRouter>
        </div>
      );
  }
}

export default App;
