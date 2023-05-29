# MYTUBE 🎞️

직업은 갭알자 취미는 💰재테크💰 입니다만...

`재테크`와 관련된 영상만 보여주는 사이트 입니다.

완성된 페이지는 [여기](https://emily-mytube.netlify.app/)에서 확인할 수 있어요. 

## 사용한 기술 🔧
<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/>&#160;
<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=flat&logo=React&logoColor=white"/>&#160;
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/>&#160;
<img src="https://img.shields.io/badge/reactquery-FF4154?style=flat&logo=JavaScript&logoColor=white"/>&#160;
<img src="https://img.shields.io/badge/reactrouter-CA4245?style=flat&logo=JavaScript&logoColor=white"/>&#160;

## 구현된 기능 ✨

- [x] GNB와 비디오 리스트 나누기
- [x] 비디오 카드에 섬네일, 제목, 작성자, 날짜 추가
- [x] 키워드 단위로 검색 기능
- [x] 영상 클릭 시 상세 페이지 보여주기
- [x] 라우팅 적용
- [x] 반응형 적용
- [x] Not Found 페이지 만들기
- [x] 다크모드/화이트모드 적용
- [x] 댓글 추가

</br>

## What I Learned

### timeago 사용

[timeago](https://www.npmjs.com/package/timeago.js/v/4.0.0-beta.3)를 사용하여 시간 표시를 변경할 수 있어요.

### axios 사용

[axios](https://github.com/axios/axios)를 사용해서 네트워크 통신을 할 수 있어요.

**axios의 장점**

- `response`를 받아올 때 `json`으로 변환해주지 않아도 돼요.
- 네트워크 에러 시 `catch`에서 받을 수 있어요.

</br>

### mock data 사용

api 호출 횟수 초과 방지를 위해 mock data를 만들어서 개발할 수 있어요.

</br>

### React Router 사용

[React Router](https://reactrouter.com/en/main)를 사용해서 SPA을 유지하면서 멀티 페이지처럼 구현할 수 있어요. (CSR)

- 페이지 별 경로 설정을 할 수 있어요.
- 페이지 이동 및 히스토리 이용 가능해요.

**CSR (Client Side Rendering)?**

페이지 이동 시, 페이지 전체가 업데이트 되지 않고 필요한 데이터만 요청해서 부분적으로 업데이트 하는 것을 말해요.

</br>

### useQuery 사용

[TanStack Query](https://tanstack.com/query/latest)를 사용해서 네트워크에서 가져온 데이터의 상태를 관리 할 수 있어요.

</br>

### useEffect와 useCallback 이해

**useEffect** : 컴포넌트가 렌더링 되었을 때 처리해야 하는 함수를 호출 해요.

두 번째 인자(dependencies)로 어떤 값의 변경으로 렌더링 되었을 때 setup 함수를 호출할지 정해줘요.

</br>

**Dependencies**

`[](배열이 비어있는 경우)` : 컴포넌트 처음 마운트 시에만 호출돼요.

`[value](특정 값이 있는 경우)` : 컴포넌트 내 `value`가 변경되어서 다시 렌더링 되는 경우 호출돼요.

</br>

**useCallback** : 컴포넌트가 다시 렌더링 되었을 때 함수가 재정의 될 수 있는데요,

이 때 함수 정의를 캐시해서 다시 정의되지 않게 해주는 역할을 해요.

두 번째 인자(dependencies)로 코드 내부에서 참조되는 값을 적어주면,

참조 값이 변경되는 경우 함수를 재정의 해요.

**React 공식 문서에서는 함수 종속성에 대한 필요성은 최대한 제거하는 것을 지향하고 있어요.**

</br>

### 외부 api 사용

[Youtube Api](https://developers.google.com/youtube?hl=ko)를 사용하여 외부 api를 프로젝트에 적용하는 방법을 배웠어요.
