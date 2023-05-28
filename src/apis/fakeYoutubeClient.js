import axios from 'axios';

export default class FakeYoutubeClient {
  async releated(params) {
    return axios.get(`/data/related.json`);
  }

  async channels(params) {
    return axios.get(`/data/channels.json`);
  }

  async search(params) {
    return axios.get(`/data/search.json`);
  }

  async videos(params) {
    return axios.get(`/data/popular.json`);
  }
}
