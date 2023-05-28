import React from 'react';
import VideoCard from '../components/VideoCard';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import Error from '../components/Error';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => youtube.search(keyword), {
    staleTime: 1000 * 30,
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && (
        <Error errorReason={error.response.data.error.errors[0].reason} />
      )}
      {videos && (
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
          {videos.map(
            (video) => video.id && <VideoCard key={video.id} video={video} />
          )}
        </ul>
      )}
    </>
  );
}
