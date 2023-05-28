import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatAgo } from '../util/date';

export default function VideoCard({ video, isList }) {
  const { thumbnails, title, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();

  return (
    <li
      className={`cursor-pointer ${isList ? 'flex gap-1 m-2' : ''}`}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img
        src={thumbnails.medium.url}
        alt={title}
        className={isList ? 'w-60 mr-2' : 'w-full'}
      />
      <div>
        <h1 className='font-semibold my-2 line-clamp-2'>{title}</h1>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko_KR')}</p>
      </div>
    </li>
  );
}
