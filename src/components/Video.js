import React from 'react';
import ReactPlayer from 'react-player';
import api from '../api';

class Video extends React.Component {

    state = {
        movie: {}
    }

    componentDidMount(){
        api
        .get(`/movies/${this.props.match.params.id}`)
        .then( data => this.setState({ movie: data }))
        .catch( err => console.error(err))
    }


    render() {
        const { title, description, video_url } = this.state.movie
        return (
            <div>
                <ReactPlayer url={video_url}/>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
    )}
}

export default Video;