const baseURI = 'public/data'; //'https://www.googleapis.com/youtube/v3';
const Key = 'AIzaSyBoRWp7hT6G0Zxkn-uADSCkk9ulOcD60o0';

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

export function Search(query) {
  const uri = 'search.json'; // `search?part=snippet&maxResults=25&q=${query}`;
  return GetData(uri);
}

export function GetMostPopuplar(maxResult) {
  const uri = 'popuplar.json'; // `search?part=snippet&chart=mostPopular&maxResult=${maxResult}`;
  return GetData(uri);
}

export function GetReleatedVideoId(videoId, maxResult) {
  const uri = 'related.json'; // `search?part=snippet&relatedToVideoId=${videoId}&type=video&maxResult=${maxResult}`;
  return GetData(uri);
}

export function GetChannels(ChannelId) {
  const uri = 'channels.json'; //`channels?part=snippet&id=${ChannelId}`;
  return GetData(uri);
}

function GetData(uri) {
  const input = `${baseURI}/${uri}`; //`${baseURI}/${uri}&key=${Key}`;
  return (
    fetch(input, requestOptions)
      // .then((response) => response.text())
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => console.log('error', error))
  );
}
