import React, { Component } from 'react';

import './home.css'
class home extends Component {
  state={}
  

    handleOnSubmit(event){
    }
    handleChange=async(event)=>{
        const genre = await event.target.value
        this.setState({genre:genre})
    }
    render() {
      const {movies}=this.state
        return (
            <div className={movies?'home':'home-loading'}>
              <h1>What movie should we watch today?</h1>
              <h3>Pick Your Favorite Genre!</h3>
                <form onSubmit={this.handleOnSubmit}>
                    <label>
                    <select onChange={this.handleChange}>
                        <option value="Action">Action</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Fantasy">Fantasy</option>
                    </select>
                    </label>
                </form>
            </div>
        );
    }
}

export default home;
