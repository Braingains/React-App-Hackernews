import React from 'react';

const Story = (props) => {
    return (
        <div className="story">
        <h1>{props.title}</h1>
        <a href={props.url}>{props.url}</a>
        </div>
    )
}

export default Story;