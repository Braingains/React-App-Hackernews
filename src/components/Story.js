import React from 'react';

const Story = (props) => {
    return (
        <>
        <h1>{props.title}</h1>
        <a href={props.url}>{props.url}</a>
        </>
    )
}

export default Story;