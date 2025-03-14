# 영양제 목록 검색 페이지

<br>

## 🚀 정보

- [배포주소 바로가기](https://wanted-team2.netlify.app/)
- [노션 바로가기](https://sleepy-oxygen-343.notion.site/3-37f615ee8bef4160ba99cb55323f5cd1)
- [피그마 바로가기](https://www.figma.com/file/REkIeMk5Za8aGg5YSNqBMc/%EC%97%90%EB%84%88%EC%A7%80-%EB%B0%B8%EB%9F%B0%EC%8A%A4?node-id=0%3A1)

<br>

## 📝 스택

<br/>

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"> <img alt="SCSS" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/></a>

## 👀 프로젝트 빌드 및 실행 방법

1. 상단 `Code` 버튼을 눌러 레포지토리를 클론 받습니다.

```
$ git clone https://github.com/wanted-team2/3week_SearchFilter.git
```

2. 패키지를 설치합니다.

```
$ yarn install
```

3. 서버를 실행합니다.

```
$ yarn start
```

<br>

## 🔥 프로젝트 과정 소개

| [정보 공유](https://www.notion.so/5520df8322e549ebb29b4528de020d52)| [반복 최소화](./styles/font.ts)|
| --- | --- |
| ![정보공유](https://user-images.githubusercontent.com/78653426/153548448-d9e13041-e5fa-4b66-b69f-9b54b8d8fbdc.png) | ![반복 최소화](https://user-images.githubusercontent.com/68528752/154165034-04acc4b2-c218-4474-96b4-57841b0d1772.png) |


<br>


## ✨ 구현 사항 목록 
-    `Typescript` 사용
-    apis, base, domain, hooks, pages, styles, types, utils 으로 프로젝트 구조를 나눠 재사용에 용이하게 개발

#### 1. 검색 기능 debounce 적용
- [x] 콜백 함수의 불필요한 실행을 줄여주기 위해 검색 기능에 `debounce` 적용
- [x] 불필요한 서버 리퀘스트를 막고, 불필요한 통신을 줄임과 동시에 필요 없는 렌더링 또한 막을 수 있음

#### 2. 반응형 페이지 구현
- [x] 데스크탑과 모바일 두 가지 버전의 레이아웃을 구성
- [x] `데스크탑` 버전에서는 넓은 스크린이라는 특성에 맞추어 많은 양의 데이터를 조회할 수 있도록  `페이지네이션` 추가<br> `브랜드 버튼`과 `제품 버튼`을 제공하여 항목별 검색 가능
- [x] `모바일` 버전에서는 화면이 터치 가능하다는 특성에 맞추어 `브랜드 태그`를 추가해 브랜드별 상품들을 쉽게 조회할 수 있도록 구성

#### 3. 검색 초기화 버튼
- [x] 검색 리스트 조회 요청 시 검색창이 초기화되도록 설계하여 이후 재검색을 필요로 하는 상황에서 불필요한 행동을 줄이고 더 빠르게 사용 가능

#### 4. 검색어 필터 기능
- [x]  대소문자 구분 x
- [x]  제품명, 브랜드명 으로 필터링 한 뒤 리스트 병합
- [x]  useState를 이용한 이전 검색 기록을 관리하여 사용자에게 더 나은 사용 경험을 전달함 

#### 5. Pagination 기능 
- [x] 페이지 가장끝과 앞으로 이동하는 기능 구현, 필요한 데이터만 slice로 잘라서 보여주는 기능 구현


<br>
<br>
<br>

## 📈 디렉토리 구조

```
├── README.md
├── build
│   ├── mock
│   ├── asset-manifest.json
│   ├── index.html
│   ├── robots.txt
│   └── static
├── config-overrides.js
├── package.json
├── public
│   ├── mock
│   ├── index.html
│   └── robots.txt
├── src
│   ├── apis
│   ├── assets
│   ├── components
│   ├── hooks
│   ├── pages
│   ├── styles
│   ├── types
│   └── utils
├── APP.tsx
├── index.tsx
├── setupTest.ts
├── tsconfig.json
├── tsconfig.paths.json
└── yarn.lock
```
