import axios from 'axios';

export default class FakeYoutube {
  async relatedVideoId(videoId) {
    return axios.get(`/data/related.json`);
  }

  async channels(channelId) {
    return axios.get(`/data/channels.json`);
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    return axios.get(`/data/search.json`).then((res) => res.data.items);
  }

  async #mostPopular() {
    return axios.get(`/data/popular.json`).then((res) => res.data.items);
  }
}
