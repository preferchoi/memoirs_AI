# memoirs_AI

## React + GPT API로 AI회고록 서비스 개발 (원데이 클래스)
- 강의 링크: https://www.inflearn.com/course/react-gpt-api-ai%ED%9A%8C%EA%B3%A0%EB%A1%9D-%EC%84%9C%EB%B9%84%EC%8A%A4-%EA%B0%9C%EB%B0%9C/dashboard

### chatGPT 이용하여 프롬프트 개발
- 프로프트 엔지니어링
    1. 역할 설정
    2. 해야 할 일 순서 정하기
    3. 출력 형식 명시
    4. 변수 지정

- 마크다운 형식으로 이미지 출력하게 만들기
```
Please send me images according to the following rules:

1. Use markdown format;
2. Use the Unsplash API;
3. Reply using the format " ![image]https://source.unsplash.com/featured/?<my_input> ";
4. Do not use code blocks, do not describe other content, do not explain;
5. Generate the corresponding format based on the content I input.
```

- json 형식으로 데이터 출력하게 만들기
```
a
```


- 데이터 출력을 위해 프롬프트에 지정한 변수만 바꿔가면 원하는 데이터 호출 가능


### 프로젝트 시작

- vite 이용해서 리액트 프로젝트 시작
```
npm create vite@latest {pjt_name}

y 체크
react 체크
javascript 체크

cd {pjt_name}
npm i
npm run dev
```

- 왜 npx create-react-app {pjt_name}으로 생성하지 않았나?
    1. vite는 빠른 HMR을 제공
        - 빠른 HMR을 제공받아 코드 변경을 빠르게 확인할 수 있어 개발 생산성을 향상할 수 있다.
        ※HMR?
            Hot Module Replacement의 약자. 코드를 변경한 후 전체 페이지를 새로고침하지 않고도 변경된 모듈만 런타임에서 교체할 수 있게 함.
    2. vite는 기본적으로 Zero-Configuration을 제공
        - 초기 설정을 건너뛸 수 있게 해줌. 해당 프로젝트는 소규모 프로젝트이기 때문에, 환경 설정에 소모되는 비용을 줄이기 위해 vite를 선택



