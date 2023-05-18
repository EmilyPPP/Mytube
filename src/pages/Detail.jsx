import React from 'react';
import VideoDetail from '../components/VideoDetail/VideoDetail';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const { videoId } = useParams();

  return <VideoDetail Id={videoId} />;
}
