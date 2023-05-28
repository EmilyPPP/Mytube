import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import VideoCard from './VideoCard';
import Error from './Error';

export default function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['related', id], () => youtube.relatedVideoId(id), {
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && (
        <Error errorReason={error.response.data.error.errors[0].reason} />
      )}
      {videos && (
        <ul>
          {videos.map(
            (video) =>
              video.id && (
                <VideoCard key={video.id} video={video} isList={true} />
              )
          )}
        </ul>
      )}
    </>
  );
}
