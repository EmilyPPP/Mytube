const baseURI = 'https://www.googleapis.com/youtube/v3';
const Key = 'AIzaSyBoRWp7hT6G0Zxkn-uADSCkk9ulOcD60o0';

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

export function Search(query) {
  return GetData(`search?part=snippet&maxResults=25&q=${query}`);
}

export function GetMostPopuplar(maxResult) {
  return GetData(
    `search?part=snippet&chart=mostPopular&maxResult=${maxResult}`
  );
}

export function GetReleatedVideoId(videoId, maxResult) {
  return GetData(
    `search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResult=${maxResult}`
  );
}

export function GetChannels(ChannelId) {}

function GetData(uri) {
  return fetch(`${baseURI}/${uri}&key=${Key}`, requestOptions)
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.log('error', error));
}
