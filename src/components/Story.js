import React, { useState, useEffect } from 'react';
import { getStory } from '../services/hnApi';
import { StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement } from '../styles/StoryStyles';
import { mapTime } from '../mappers/mapTime'

export const Story = ({ storyId }) => {
   const [story, setStory] = useState({}); 
   useEffect(() => {
       getStory(storyId).then(data => data && data.url && setStory(data))
   }, []); 

   return story && story.url ? (
       <StoryWrapper>
           <StoryTitle>
           <a href={story.url}>{story.title}</a>
           </StoryTitle>

           <StoryMeta>
               <span className="story__by">
                   <StoryMetaElement color="#000">By:</StoryMetaElement> {story.by}
               </span>
               <span className="story__time">
                   <StoryMetaElement color="#000">Posted:</StoryMetaElement> { mapTime(story.time) }
               </span>
           </StoryMeta>
       </StoryWrapper>
   ): null;
}

