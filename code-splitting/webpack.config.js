var path = require("path");

module.exports = {
    mode: "none", // production, development, none
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },

    // Loaders: 웹팩이 자바스크립트 외의 파일(HTML, CSS, 이미지 등)을 처리할 수 있도록 도와주는 모듈
    module: {
        rules: [
            {
                // 예시: .scss 파일을 처리하는 경우
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"], // 오른쪽에서 왼쪽 순서로 적용됨

                // 1️⃣ sass-loader: Sass/SCSS 파일을 CSS로 컴파일
                // 2️⃣ css-loader: CSS 파일을 JS에서 import 할 수 있도록 자바스크립트 모듈로 변환
                // 3️⃣ style-loader: CSS를 <style> 태그로 만들어 DOM에 삽입

                // 처리 흐름
                // SCSS → CSS → JS Module → DOM <style>
            },
        ],
    },
};
