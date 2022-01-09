import React, {useEffect, useState} from 'react';
import { getStoryIds } from '../services/hnApi';
import { Story } from '../components/Story';
import { GlobalStyle, StoriesContainerWrapper } from '../styles/StoriesContainerStyles';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getStoryIds().then(data => {
        setStoryIds(data)
        setLoading(false)
    })
  }, []);

  return (
    <>
    <GlobalStyle />
    <StoriesContainerWrapper>
    <h1>Hacker News Stories</h1>
      { isLoading ? 'News Loading...' : storyIds.map(storyId => <Story key={storyId} storyId={storyId} />) }
    </StoriesContainerWrapper>
    </>  
  )
}
