import React from 'react';
import VideoCard from '../components/VideoCard/VideoCard';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';
import FakeYoutube from '../apis/fakeYoutube';

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => {
    const youtube = new FakeYoutube();
    return youtube.search(keyword);
  });

  return (
    <>
      videoList
      {isLoading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={uuidv4()} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
