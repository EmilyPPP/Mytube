import React from 'react';
import { formatAgo } from '../util/date';

export default function CommentCard({ comment }) {
  const { authorProfileImageUrl, authorDisplayName, textDisplay, publishedAt } =
    comment.snippet.topLevelComment.snippet;
  return (
    <div className='flex items-center mb-4'>
      <img
        className='w-10 h-10 rounded-full'
        src={authorProfileImageUrl}
        alt={authorDisplayName}
      />
      <div className='flex flex-col ml-4'>
        <div className='flex items-center'>
          <h3 className='font-semibold'>@{authorDisplayName}</h3>
          <p className='text-xs font-light opacity-80 ml-2'>
            {formatAgo(publishedAt, 'ko_KR')}
          </p>
        </div>
        <span
          className='text-md'
          dangerouslySetInnerHTML={{ __html: textDisplay }}
        />
      </div>
    </div>
  );
}
