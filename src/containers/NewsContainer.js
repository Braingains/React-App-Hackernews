import React, { useEffect, useState } from 'react';
import StoriesList from '../components/StoriesList';

const NewsContainer = () => {

    const [stories, setStories] = useState([]);
    const [filteredStories, setFilteredStories] = useState([]);

    useEffect(() => {
        console.log("use effect")
        loadTopStories()
    }, [])

    useEffect(() => {
        orderByTitle()
    }, [filteredStories])

    const loadTopStories = () => {
        fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`)
        //we fetch the array of article numbers
        .then(res => res.json())
        .then(data => {
            const slicedData = data.slice(0, 20)
            // we slice the array to only return the first 20
            const ipromise = slicedData.map(storyId => {
                //we map those 20 into a new array
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
                //this array is of the above url with the article numbers interpolated
                //so this is an array of fetch requests
                .then(res => res.json())
            });
            Promise.all(ipromise).then(data => {
                setStories(data);
                setFilteredStories(data);
            })
            //Promise.all waits for all of the data to come back before adding it to setStories
        })
    }
      
    const orderByTitle = () => {
       let newList = stories.sort(function(a, b) {
            var textA = a.title.toUpperCase();
            var textB = b.title.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        // console.log("clickly click click")

        setFilteredStories(newList);
        
    //     console.log("clickly click click")
    //     const newStories = stories.sort((a, b) => a.title.localeCompare(b.title));
    //     setStories(newStories)
    }


    return (
        <div className= "orderbutton">
        <p>I'm the newsContainer</p>
        <button onClick = { () => {
            orderByTitle()
        }}
        > Order by Title</button>
        <StoriesList stories={filteredStories}
        />
        </div>
    )
}

export default NewsContainer;


// https://hacker-news.firebaseio.com/v0/topstories.json 
// https://hacker-news.firebaseio.com/v0/item/{storyId}.json}
