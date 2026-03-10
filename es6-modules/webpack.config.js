var path = require("path");

module.exports = {
    mode: "production",

    // entry: 최초 진입점이자 번들링 대상이 되는 파일의 경로
    entry: "./js/app.js",

    // output: 번들링된 결과물이 저장될 경로와 파일 이름을 지정
    output: {
        path: path.resolve(__dirname, "build"), // 해당 파일의 경로
        filename: "main.bundle.js", // 웹팩으로 빌드한 파일의 이름
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
