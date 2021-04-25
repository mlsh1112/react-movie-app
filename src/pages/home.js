import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './home.css'
class home extends Component {
    state={
      genre:'Action'
    }
    handleChange=async(event)=>{
        const genre = await event.target.value
        this.setState({genre:genre})
    }
    render() {
      const {movies}=this.state
        return (
            <div className='home'>
              <h1>What movie should we watch today?</h1>
              <h3>Pick Your Favorite Genre!</h3>
                <form>
                    <label>
                    <select onChange={this.handleChange} className='select'>
                        <option value="Action">Action</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Fantasy">Fantasy</option>
                    </select>
                    </label>
                </form>
                <div >
                <Link className='btn' to={`/react-movie-app/loading/${this.state.genre}`}> FIND {this.state.genre} Movie!</Link>
                </div>
            </div>
        );
    }
}

export default home;
