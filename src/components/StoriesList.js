import React from 'react';
import Story from './Story'

const StoriesList = (props) => {

    return (
        <>
        {props.stories.map((story, index) => {
            return (
                <Story 
                key={index}
                position={index + 1}
                title={story.title}
                url={story.url}
                />
            )
        })}
        <h1>I'm the Stories List</h1>
       
        </>
    )
}

export default StoriesList;