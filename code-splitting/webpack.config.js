var path = require("path");
var MiniCssExtractPlugin = require("mini-css-extract-plugin"); // CSS를 별도의 파일로 추출하는 플러그인

module.exports = {
    mode: "none", // production, development, none
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    // Loaders: 웹팩이 자바스크립트 외의 파일(HTML, CSS, 이미지 등)을 처리할 수 있도록 도와주는 모듈
    // module: {
    //     rules: [
    //         {
    //             // 예시: .scss 파일을 처리하는 경우
    //             test: /\.scss$/,
    //             use: ["style-loader", "css-loader", "sass-loader"], // 오른쪽에서 왼쪽 순서로 적용됨

    //             // 1️⃣ sass-loader: Sass/SCSS 파일을 CSS로 컴파일
    //             // 2️⃣ css-loader: CSS 파일을 JS에서 import 할 수 있도록 자바스크립트 모듈로 변환
    //             // 3️⃣ style-loader: CSS를 <style> 태그로 만들어 DOM에 삽입

    //             // 처리 흐름
    //             // SCSS → CSS → JS Module → DOM <style>
    //         },
    //     ],
    // },
    // 로더: 파일을 해석하고 변환하는 과정에 사용
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"],
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    // 플러그인: 해당 로더로 처리된 결과물을 최적화하거나 추가적인 기능을 제공
    // plugins: [new MiniCssExtractPlugin(), new webpack.ProgressPlugin()], // 생성자 함수로 생성한 객체 인스턴스만 추가
};
