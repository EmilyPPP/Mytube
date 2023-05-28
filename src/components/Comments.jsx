import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import CommentCard from './CommentCard';

export default function Comments({ videoId }) {
  const { youtube } = useYoutubeApi();

  const { data: comments } = useQuery(
    ['comments', videoId],
    () => youtube.comments(videoId),
    {
      staleTime: 1000 * 60,
    }
  );

  return (
    <ul>
      {comments?.map((comment) => (
        <li key={comment.id}>
          <CommentCard comment={comment} />
        </li>
      ))}
    </ul>
  );
}
