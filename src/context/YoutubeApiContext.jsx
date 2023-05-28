import { createContext, useContext, useEffect } from 'react';
import Youtube from '../apis/youtube';
import YoutubeClient from '../apis/youtubeClient';
import FakeYoutubeClient from '../apis/fakeYoutubeClient';

export const YoutubeApiContext = createContext();

const youtube = new Youtube(new FakeYoutubeClient());

export function YoutubeApiProvider({ children }) {
  useEffect(() => {});

  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export const useYoutubeApi = () => {
  return useContext(YoutubeApiContext);
};
