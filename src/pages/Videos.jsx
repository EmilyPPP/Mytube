import React from 'react';
import VideoList from '../components/VideoList/VideoList';
import { useParams } from 'react-router-dom';

export default function Videos() {
  const { keyword } = useParams();

  return <VideoList keyword={keyword} />;
}
