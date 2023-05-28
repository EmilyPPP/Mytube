import axios from 'axios';

export default class FakeYoutubeClient {
  async channels(params) {
    return params.relatedToVideoId
      ? axios.get(`/data/reated.json`)
      : axios.get(`/data/channels.json`);
  }

  async search(params) {
    return axios.get(`/data/search.json`);
  }

  async videos(params) {
    return axios.get(`/data/popular.json`);
  }

  async comments(params) {
    return axios.get(`/data/comment.json`);
  }
}
