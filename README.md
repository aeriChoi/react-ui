# React-UI


## Demo

[https://aerichoi.github.io/react-ui/](http://aerichoi.github.io/react-ui/)

## Version

- node.js: 14.16.1 [다운로드](https://nodejs.org/ja/blog/release/v14.16.1/)
- npm: 6.14.12
```
npm i npm@6.14.12
```
- react: 17.0.2
- 이하 package.json 파일 확인.


## Running Process

### `install`
```
npm install
```

### `dev`

```
npm run dev
```

### `start`

```
npm run start
```

### `build`

배포 시에만 필요.(생략 가능)

```
// github 배포시
npm run deploy

// 빌드시
npm run build
```


### 기능 사항

- ie 10+
- 반응형 X
- 웹 접근성 준수
- 번들링 webpack 세팅
- 카드 UI
    - 세로형  & 가로형 레이아웃 
    - 카드 하단 텍스트 영역
    - 카드 하단 별점 처리 UI (별점 처리 UI 1~5 점 사이 처리, 소수 x)
    - 카드의 크기는 가변, 이미지 영역 비율 유지
- 입력 폼 UI
    - 텍스트 입력 시 남은 글자 수 표시 (최대 글자 수 설정 가능)
    - default 상태 - 내용이 없으면 placeholder 처리.
    - 초기값 내용이 있을 경우 수정 전까지 버튼 비활성화. (수정시 버튼 활성화)
    - 입력 중 상태 - 내용 변경 시 Save 버튼이 활성화
    - disabled 비활성화 상태 - 입력 불가 상태
