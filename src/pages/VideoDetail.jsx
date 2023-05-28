import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';
import Comments from '../components/Comments';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { id } = video;
  const { title, channelTitle, description, channelId } = video.snippet;

  return (
    <section className='flex flex-col lg:flex-row'>
      <div className='flex flex-col basis-4/6'>
        <article className=''>
          <iframe
            title={title}
            id='player'
            type='text/html'
            width='100%'
            height='600px'
            src={`http://www.youtube.com/embed/${id}`}
          />
          <div className='py-8'>
            <h2 className='text-xl font-bold'>{title}</h2>
            <ChannelInfo id={channelId} name={channelTitle} />
            <pre className='whitespace-pre-wrap'>{description}</pre>
          </div>
        </article>
        <Comments videoId={video.id} />
      </div>
      <section className='basis-2/6'>
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
