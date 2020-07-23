import React from 'react';

function AddVideo(props) {
    return (
        <div>
            <h3>Add new video to the list!</h3>
            <form>
                <label for="title">Title:</label><br></br>
                <input type="text" id="title"/><br></br>
                <label for="url">Url adress:</label><br></br>
                <input type="text" id="url"/><br></br>
                <label for="description">Description:</label><br></br>
                <textarea type="text" id="description"/><br></br>

                <button>Add</button>
            </form>
        </div>
    );
}

export default AddVideo;