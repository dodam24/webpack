var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "none",
    entry: "./index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    // webpac-dev-server 설정
    devServer: {
        // 개발 서버 포트
        port: 9000,

        // Hot Module Replacement 활성화
        // 변경된 모듈만 교체하여 전체 새로고침 없이 반영
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
            template: "index.html",
        }),
    ],
};
