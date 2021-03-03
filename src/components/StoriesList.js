import React from 'react';
import Story from './Story'

const StoriesList = (props) => {

    return (
        <>
        <button onClick = { () => {
            props.orderByTitle()
        }}
        > Order by Title</button>
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
       
        </>
    )
}

export default StoriesList;