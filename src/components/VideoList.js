import React from 'react';
import { Link } from 'react-router-dom';

import "../styles/videoList.css";

class VideoList extends React.Component {

  state = {
    movies: []
  }

  componentDidMount(){
    fetch("https://srapi.herokuapp.com/v1/movies")
    .then( response => response.json())
    .then( data => this.setState({ movies: data }))
    .catch(err => console.error(err))
  }


  render() {
    return (
      <div className="video-list">
        {this.state.movies.map((movie, index) => (
          <div className="video-list-element" key={`movie-${index}`}>
            <h3>
              <Link to={`/video/${movie.id}`}>{movie.title}</Link>
            </h3>
            <p>{movie.description}</p>
            <p>{movie.video_url}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default VideoList;