import React, { useEffect, useState } from 'react';
import VideoPlayer from './VideoPlayer'; 
import Markdown from 'react-markdown';

function CourseVideoDescription({ courseInfo }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (courseInfo) {
      setLoading(false);
    }
  }, [courseInfo]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const videoUrl = courseInfo?.chapter?.[0]?.video?.url;

  return (
    <div>
      <h2 className='text-[20px] font-semibold'>{courseInfo?.name}</h2>
      {videoUrl ? (
        <VideoPlayer videoUrl={videoUrl} className="mt-4" />
      ) : (
        <p className="mt-4">No video available</p>
      )}
      <h2 className='mt-5 text-[17px] font-semibold'>About this Course</h2>
      <div>
        <Markdown className='text-[16px] font-light mt-2 leading-6'>{courseInfo.description}</Markdown>
      </div>
    </div>
  );
}

export default CourseVideoDescription;
