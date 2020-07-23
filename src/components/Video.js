import React from 'react';

class Video extends React.Component {

    state = {
        movie: {}
    }

    componentDidMount(){
        fetch(`https://srapi.herokuapp.com/v1/movies/${this.props.match.params.id}`)
        .then( response => response.json())
        .then( data => this.setState({ movie: data }))
        .catch( err => console.error(err))
    }


    render() {
        const { title, description, video_url } = this.state.movie
        return (
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{video_url}</p>
            </div>
    )}
}

export default Video;