export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async relatedVideoId(videoId) {
    return this.apiClient.releated({
      params: {
        part: 'snippet',
        relatedToVideoId: videoId,
        type: 'video',
        maxResults: 25,
      },
    });
  }

  async channels(channelId) {
    return this.apiClient.channels({
      params: {
        part: 'snippet',
        id: channelId,
      },
    });
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: 'snippet',
          maxResults: 25,
          chart: 'mostPopular',
        },
      })
      .then((res) => res.data.items);
  }
}
