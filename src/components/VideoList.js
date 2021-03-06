import React from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

import "../styles/videoList.css";

class VideoList extends React.Component {

  state = {
    movies: []
  }

  componentDidMount(){
    api
    .get("/movies")
    .then( data => this.setState({ movies: data }))
    .catch(err => console.error(err))
  }


  render() {
    return (
      <React.Fragment>
        <h2>Video List</h2>
        <div className="video-list">
          {this.state.movies.map((movie, index) => (
            <div className="video-list-element" key={`movie-${index}`}>
              <div className="video-list-element_img">Image placeholder</div>
              <h3>
                <Link to={`/video/${movie.id}`}>{movie.title}</Link>
              </h3>
              <p>{movie.description}</p>
              <Link to={`/edit/${movie.id}`}><button>Edit video details</button></Link>
            </div>
          ))}
        </div>
      </React.Fragment>
    )
  }
}

export default VideoList;