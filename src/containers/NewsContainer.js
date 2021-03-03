import React, { useEffect, useState } from 'react';
import StoriesList from '../components/StoriesList';

const NewsContainer = () => {

    const [topStories, setTopStories] = useState([]);
    const [stories, setStories] = useState([]);

    useEffect(() => {
        loadTopStories()
    }, [])

    useEffect(() => {
        loadStory()
    },[topStories])

    const loadTopStories = () => {
        fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`)
        .then(res => res.json())
        .then(data => setTopStories(data))
    }

    const loadStory = () => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${topStories[1]}.json`)
        .then(res => res.json())
        .then(data => setStories(data))
    }




    return (
        <>
        <p>I'm the newsContainer</p>
        <StoriesList />
        </>
    )
}

export default NewsContainer;


// https://hacker-news.firebaseio.com/v0/topstories.json 
// https://hacker-news.firebaseio.com/v0/item/{storyId}.json