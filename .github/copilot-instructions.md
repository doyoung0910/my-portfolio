# Copilot 작업 안내

## 실행 명령

아래 명령은 저장소의 최상위 폴더에서 실행합니다. Node.js 24 LTS가 필요합니다.

- `npm install` — 프로젝트 실행에 필요한 패키지를 설치합니다.
- `npm run dev` — Vite 개발 서버를 실행합니다.
- `npm run lint` — Oxlint로 프로젝트 코드를 검사합니다.
- `npm run lint -- src/App.jsx` — `src/App.jsx` 파일만 검사합니다.
- `npm run build` — 배포용 파일을 `dist/` 폴더에 만듭니다.
- `npm run preview` — 배포용 빌드를 로컬에서 미리 확인합니다.

현재 `package.json`에는 테스트 명령이나 테스트 도구가 설정되어 있지 않아, 개별 테스트를 실행하는 명령도 없습니다.

## 프로젝트 구조와 동작 방식

- `src/main.jsx`가 React 앱을 `StrictMode`로 시작하고, 전체 페이지에 적용할 스타일 파일을 불러옵니다.
- `src/App.jsx`에 페이지 화면, 예시 프로젝트 데이터, 메뉴 이동 처리가 모여 있습니다. 별도의 라우팅 라이브러리 대신 URL 해시(`#/about`, `#/portfolio`, `#/portfolio/:style`)를 이용하며, `useSyncExternalStore`가 해시 변경을 감지합니다.
- `App.jsx`의 `projects` 배열이 포트폴리오 카드와 프로젝트 상세 화면의 원본 데이터입니다. `ProjectArtwork`는 프로젝트의 `style` 값에 따라 그림 스타일을 정합니다. 이 값을 라우트 판별 코드 및 `App.css`의 해당 스타일 선택자와 일치시켜 주세요.
- 해시 경로가 바뀌면 `App.jsx`가 브라우저 탭 제목, 스크롤 위치, 키보드 포커스 위치를 맞춥니다. 메뉴나 페이지 구성을 바꿀 때 이 동작도 유지해 주세요.
- `src/index.css`에는 전체 글꼴, 색상, 포커스 표시, 동작 줄이기 설정이 있습니다. 각 페이지와 화면 크기별 디자인은 `src/App.css`에 있습니다.
- `index.html`은 문서 언어를 한국어로 지정하고 React가 화면을 표시할 위치와 기본 탭 제목을 제공합니다. `vite.config.js`는 Vite에서 React를 사용할 수 있게 설정합니다.

## 이 프로젝트의 작성 규칙

- 문서 언어에 맞춰 화면 문구와 프로젝트 예시는 한국어로 작성합니다.
- `README.md`에 안내된 것처럼 프로젝트 설명은 실제 작업에 맞게 바꿔 쓰는 예시입니다. 사이트 소유자 이름은 `App.jsx`의 `ownerName`에서 관리하며, 사이트/브랜드 이름과 사람 이름을 구분해 주세요.
- 의미에 맞는 제목과 HTML 영역 요소를 사용하고, 메뉴와 버튼에 알아보기 쉬운 이름을 지정합니다. 경로가 바뀔 때 키보드 포커스가 적절한 위치로 이동하는 동작도 유지합니다.
- 화면 배치와 디자인은 기존 CSS 파일에서 관리합니다. `index.css`에 정의된 공통 색상 변수를 사용하고, `App.css`의 화면 크기별 레이아웃과 동작 줄이기 설정을 유지합니다.
- Oxlint는 React 및 Oxc 플러그인을 사용합니다. React Hook 규칙 위반은 오류이며, `react/only-export-components` 규칙 위반은 경고입니다.
