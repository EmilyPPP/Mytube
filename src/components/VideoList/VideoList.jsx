import React from 'react';

export default function VideoList({ keyword }) {
  return <div>Videos {!keyword ? '🔥' : `🔍 ${keyword}`}</div>;
}
