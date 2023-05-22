import React from 'react';
import VideoCard from '../components/VideoCard/VideoCard';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import FakeYoutube from '../apis/fakeYoutube';
import Youtube from '../apis/youtube';

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => {
    const youtube = new Youtube();
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
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
