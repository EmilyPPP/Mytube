import axios from 'axios';

const baseURI = 'public/data'; //'https://www.googleapis.com/youtube/v3';
const Key = 'AIzaSyBoRWp7hT6G0Zxkn-uADSCkk9ulOcD60o0';

export async function search(keyword) {
  const uri = `/data/${keyword ? 'search' : 'popular'}.json`;
  return axios.get(uri).then((res) => res.data.items);
}
