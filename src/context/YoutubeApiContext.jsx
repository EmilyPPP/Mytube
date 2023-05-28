import { createContext, useContext } from 'react';
import Youtube from '../apis/youtube';
import YoutubeClient from '../apis/youtubeClient';

export const YoutubeApiContext = createContext();

const youtube = new Youtube(new YoutubeClient());

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export const useYoutubeApi = () => {
  return useContext(YoutubeApiContext);
};
