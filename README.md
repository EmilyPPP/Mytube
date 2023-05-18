# MYTUBE 🎞️

나만의 영상 사이트 제작하기!

## TODO

- [ ] GNB와 비디오 리스트 나누기
- [ ] 비디오 카드에 섬네일, 제목, 작성자, 날짜 추가
- [ ] 키워드 단위로 검색 기능
- [ ] 영상 클릭 시 상세 페이지 보여주기
- [ ] 라우팅 적용
- [ ] 반응형 적용
- [ ] Not Found 페이지 만들기

## 사용한 API

[Youtube Api](https://developers.google.com/youtube?hl=ko)

키워드 검색

<https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]>

핫트렌드 비디오들

<https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=[YOUR_API_KEY]>

연관된 비디오 검색

<https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=Ks-_Mh1QhMc&type=video&maxResults=25&key=[YOUR_API_KEY]>

채널 상세내용

<https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=[YOUR_API_KEY]>
