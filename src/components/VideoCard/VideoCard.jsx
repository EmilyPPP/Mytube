import React from 'react';
import { Link } from 'react-router-dom';
import { formatAgo } from '../../util/date';

export default function VideoCard({ video }) {
  const { thumbnails, title, channelTitle, publishedAt } = video.snippet;

  return (
    <li>
      <Link to={`/videos/watch/${video.id}`} className='flex-col'>
        <img src={thumbnails.medium.url} alt={title} className='w-full' />
        <div className='flex-col'>
          <h1 className='font-semibold my-2 line-clamp-2'>{title}</h1>
          <p className='text-sm opacity-80'>{channelTitle}</p>
          <p className='text-sm opacity-80'>
            {formatAgo(publishedAt, 'ko_KR')}
          </p>
        </div>
      </Link>
    </li>
  );
}
