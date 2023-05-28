import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import VideoCard from './VideoCard';

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
      {error && <p>Error...</p>}
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
