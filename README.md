# WEMADE 사전과제

## [DEMO 사이트 보러가기](https://wemade-wookiya1364s-projects.vercel.app/)

---

## 주요사항
- 데이터패칭은 Tanstack-Query(구 React-Query)를 사용하여 커스텀 훅을 작성하고 이를 호출합니다. 이는 리액트에서 의존성 주입을 할 수 있는 패턴입니다.
    - 데이터는 서버가 없으므로 정적자료를 미리 준비하고, 이를 패칭 했습니다.
        - 경로: public/everyfarm, public/highlight, public/icarus, public/nightcrow, public/token, public/token-info
    - 커스텀 훅을 통해 데이터 패칭을 했습니다.
        - 경로: /features/detail/hooks/useEveryfarm.tsx
        - 경로: /features/detail/hooks/useIcarus.tsx
        - 경로: /features/detail/hooks/useNightcrow.tsx
        - 경로: /features/token-info/hooks/useToken.tsx
        - 경로: /features/token-info/hooks/useTokenInfo.tsx
- Apple의 애니메이션을 참고하여 개발 했습니다.
    - useInView 사용하여 Intersection Observer 기능을 쉽게 이용했고, 이를 기반으로 스크롤 애니메이션을 구현했습니다.
        - 경로: /features/gallery/page.tsx
        - 경로: /features/video-gallery/page.tsx
- 영상은 유튜브에 있는 것을 다운받고, FFMPEG을 사용하여 스트리밍을 할 수 있도록 HLS(Http Live Streaming) 변환을 했습니다.
    - 경로: /public/videos/everyfarm, /public/videos/icarus, /public/videos/mir4, /public/videos/night-crow, 
- FSD 아키텍처, Atomic Design Pattern으로 구현하는 프로젝트에 적합하도록 커스텀하여 구성했습니다.
- 상태관리는 zustand를 사용했습니다. 리액트 컴포넌트 밖에서도 상태를 변경할 수 있는 장점이 있습니다. (사전과제에서는 리액트 컴포넌트 내에서만 변경)

----


## FSD 아키텍처 
##### [참고자료](https://emewjin.github.io/feature-sliced-design)
- 레이어는 단방향으로만 상속할 수 있습니다.
- pages-flat에서 widgets의 기능 또는 컴포넌트를 import할 수 있지만, features에서는 widgets의 기능 또는 컴포넌트를 import해서는 안됩니다.

----

##### 상위 디렉토리 구조 
* pages-flat은 페이지의 모음이고, Next.js에서는 파일기반 라우팅을 하므로 pages-flat은 app의 하위에 존재하도록 변경

|||역할|
|--|--|--|
|src||root directory|
|\|-------|app|앱 진입점|
|\|-------|widgets|페이지에 사용하는 독립적인 UI 컴포넌트|
|\|-------|features|1. 비즈니스 가치를 전달하는 사용자 시나리오 및 기능 (좋아요, 리뷰 작성, 제품 평가)<br>2. 사용자에게 제공하는 구체적인 기능 구현|
|\|-------|~~entities~~|~~1. 비즈니스 엔티티를 표현 (사용자, 리뷰, 댓글)<br>2. 앱 전반에 걸쳐 공유되는 도메인 핵심 데이터와 로직을 관리~~<br>해당 프로젝트에서는 사용하지 않습니다.|
|\|-------|shared|비즈니스 로직에 종속되지 않은 재사용 가능한 컴포넌트 및 유틸리티|

---

##### 하위 디렉토리 구조

|||역할|
|--|--|--|
|app||앱 진입점|
|\|-------|types|전역 type 디렉토리|
|\|-------|api|api data routes|
|\|-------|providers.tsx|tanstack-query provider|
|\|-------|pages-flat|앱 페이지 디렉토리 (Next.js 특성에 맞춰 위치를 변경)|
|widgets||페이지에 사용하는 독립적인 UI 컴포넌트|
|\|-------|detail|상세 위젯|
|\|-------|header|헤더|
|\|-------|highlight|하이라이트 위젯|
|\|-------|footer|하단 위젯|
|\|-------|token|토큰 위젯|
|features||1. 비즈니스 가치를 전달하는 사용자 시나리오 및 기능 (좋아요, 리뷰 작성, 제품 평가)<br>2. 사용자에게 제공하는 구체적인 기능 구현|
|\|-------|detail/hooks|상세보기 커스텀 훅|
|\|-------|highlight/hooks|핵심보기 커스텀 훅|
|\|-------|token-info/hooks|토큰 커스텀 훅|
|\|-------|modal|모달 기능|
|\|-------|gallery|갤러리 기능|
|\|-------|play|재생버튼 기능|
|\|-------|video-gallery|비디오 갤러리 기능|
|\|-------|video-play|비디오 재생버튼 기능|
|~~entities~~||~~1. 비즈니스 엔티티를 표현 (사용자, 리뷰, 댓글)<br>2. 앱 전반에 걸쳐 공유되는 도메인 핵심 데이터와 로직을 관리~~<br>해당 프로젝트에서는 사용하지 않습니다.|
|\|-------|||
|\|-------|||
|shared||비즈니스 로직에 종속되지 않은 재사용 가능한 컴포넌트 및 유틸리티|
|\|-------|atom|단위 컴포넌트 디렉토리|
|\|-------|state|zustand Store 디렉토리|


# Commit Messages Style

|타입|설명|
|-----|-----|
|feat|새로운 기능 추가|
|fix|버그 수정|
|docs|문서 수정|
|refactor|코드 리펙토링|
|test|테스트 코드 추가|
|perf|성능 개선|
|design|디자인 변경|



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
