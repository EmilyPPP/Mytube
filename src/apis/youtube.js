export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async relatedVideoId(videoId) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          relatedToVideoId: videoId,
          type: 'video',
          maxResults: 25,
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }

  async channelImageUrl(id) {
    return this.apiClient
      .channels({
        params: {
          part: 'snippet',
          id,
        },
      })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async comments(videoId) {
    return this.apiClient
      .comments({
        params: {
          part: 'snippet',
          videoId,
        },
      })
      .then((res) => res.data.items);
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 100,
          q: `재테크 ${keyword}`,
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }

  async #mostPopular() {
    return this.#searchByKeyword('재테크');
  }
}
