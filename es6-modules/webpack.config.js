var path = require("path");

module.exports = {
    mode: "production",
    // 최초 진입점이자 번들링 대상이 되는 파일의 경로
    entry: "./js/app.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "main.bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
    stats: {
        colors: true,
    },
    // 번들된 코드와 원본 코드의 매핑 정보를 생성하여
    // 브라우저 DevTools에서 원본 코드 기준으로 디버깅 가능
    devtool: "source-map",
};
