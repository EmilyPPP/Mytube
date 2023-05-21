import React from 'react';
import VideoCard from '../components/VideoCard/VideoCard';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(
    ['videos', keyword],
    async () => {
      const uri = `/data/${keyword ? 'search' : 'popuplar'}.json`;
      return axios.get(uri).then((res) => res.data.items);
    },
    { staleTime: 5000, refetchOnWindowFocus: false, refetchOnMount: false }
  );

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
