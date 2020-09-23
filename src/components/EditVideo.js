import React from 'react';

import api from "../api";

class EditVideo extends React.Component {

    state = {
        movie: {}
    }

    componentDidMount(){
        api
        .get(`/movies/${this.props.match.params.id}`)
        .then( data => this.setState({ movie: data }))
        .catch( err => console.error(err))
    }

    handleInputChange = (e) => {
        this.setState({
            movie: {
                ...this.state.movie,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        api
        .patch(`/movies/${this.props.match.params.id}`,
                {title: this.state.movie.title,
                 description: this.state.movie.description,
                 video_url: this.state.movie.video_url})
    }

    render(){
        return (
            <div>
                <h2>Edit movie details:</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Movie title: </label><br></br>
                    <input type="text" name="title" id="title" value={this.state.movie.title || ""} onChange={this.handleInputChange}/><br></br>
                    <label htmlFor="description">Description: </label><br></br>
                    <textarea type="text" name="description" id="description" value={this.state.movie.description || ""} onChange={this.handleInputChange}/><br></br>
                    <label htmlFor="url">Movie URL adress: </label><br></br>
                    <input type="text" name="video_url" id="url" value={this.state.movie.video_url || ""} onChange={this.handleInputChange} /><br></br>
                    <button>Confirm changes</button>
                </form>
            </div>
        )
    }
};

export default EditVideo;