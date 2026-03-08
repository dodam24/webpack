# 📦 Webpack Study

![webpack](https://img.shields.io/badge/webpack-study-blue)
![javascript](https://img.shields.io/badge/javascript-ES6-yellow)
![node](https://img.shields.io/badge/node.js-runtime-green)

Webpack의 기본 개념과 동작 원리를 학습하고 실습한 내용을 정리한 저장소입니다.  
강의를 기반으로 Webpack의 설정 방식과 모듈 번들링 과정을 이해하는 것을 목표로 합니다.

---

# 📚 Table of Contents

- [🎯 학습 목표](#-학습-목표)
- [🧩 학습 내용](#-학습-내용)
- [📂 프로젝트 구조](#-프로젝트-구조)
- [⚙️ 실행 방법](#️-실행-방법)
- [🛠 사용 기술](#-사용-기술)

---

# 🎯 학습 목표

이 프로젝트는 Webpack의 기본 개념과 동작 원리를 이해하고  
프론트엔드 개발 환경에서 사용되는 모듈 번들러(Module Bundler)의 역할을 학습하기 위해 진행되었습니다.

학습을 통해 다음 내용을 이해하는 것을 목표로 합니다.

- Node.js와 NPM을 활용한 JavaScript 패키지 관리 방식
- Webpack의 등장 배경과 모듈 번들링(Module Bundling) 개념
- Webpack 설정 파일(`webpack.config.js`)을 통한 빌드 환경 구성
- `entry`, `output`, `loader`, `plugin` 등 Webpack 핵심 설정 이해
- Babel을 활용한 ES6+ JavaScript 문법 변환 과정
- Webpack Dev Server를 활용한 개발 환경 구축

이를 통해 프론트엔드 개발에서 사용되는 빌드 도구의 구조와 동작 방식을 이해하고  
실제 프로젝트에서 Webpack을 활용할 수 있는 기초 역량을 기르는 것을 목표로 합니다.

---

# 🧩 학습 내용

## 1️⃣ Node.js & NPM

- Node.js와 NPM 개념
- npm init / install 명령어
- 패키지 관리 방식 이해

---

## 2️⃣ NPM 패키지 관리

- 로컬 설치 vs 전역 설치
- dependencies와 devDependencies 차이
- 개발용 라이브러리와 배포용 라이브러리 구분

---

## 3️⃣ Webpack 기본 개념

- Webpack의 등장 배경
- 모듈 번들러(Module Bundler)의 역할
- Webpack이 해결하는 문제

---

## 4️⃣ Webpack 시작하기

- Webpack 기본 설정
- 번들링 과정 이해
- 빌드 결과 분석

---

## 5️⃣ Babel & ES Modules

- ES6 Modules 문법
- Babel의 역할
- Source Map 이해

---

## 6️⃣ Webpack 핵심 설정

| 설정 | 설명 |
|---|---|
| entry | 번들링을 시작할 진입 파일 |
| output | 번들링 결과 파일 설정 |
| loader | JS 외 파일을 처리하는 도구 |
| plugin | 번들링 과정 전체를 확장 |

---

## 7️⃣ Webpack Dev Server

- 개발 서버 환경 구성
- 자동 리로드 (Hot Reload)
- HTMLWebpackPlugin 사용

---

# 📂 프로젝트 구조

```
webpack-study
├ src
│ └ index.js
├ dist
│ └ bundle.js
├ webpack.config.js
├ package.json
└ README.md
```

---

# ⚙️ 실행 방법

## 1️⃣ 패키지 설치

```bash
npm install
```

---

## 2️⃣ 개발 모드 실행

```bash
npx webpack --mode development
```

---

## 3️⃣ 프로덕션 빌드

```bash
npx webpack --mode production
```

---

# 🛠 사용 기술

- Node.js
- NPM
- Webpack
- Babel
- JavaScript (ES6)
