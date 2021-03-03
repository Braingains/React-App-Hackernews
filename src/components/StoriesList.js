import React from 'react';
import Story from './Story'

const StoriesList = (props) => {

    return (
        <>

        {props.stories.map((story, index) => {
            return (
                
                <Story 
                key={index}
                title={story.title}
                url={story.url}
                />
            )
        })}
       
        </>
    )
}

export default StoriesList;