// ES6 모듈 시스템을 사용하여 lodash를 가져옴
import _ from "lodash";
// ES5 모듈 시스템을 사용하여 lodash를 가져옴
// var _ = require("lodash");

// CommonJS 모듈 시스템을 사용하여 path 모듈을 가져옴 (ES5)
// var path = require("path");

function component() {
    var element = document.createElement("div");

    // lodash의 join 함수를 사용하여 문자열을 생성
    element.innerHTML = _.join(["Hello", "webpack"], " ");
    // element.innerHTML = "Hello webpack";

    return element;
}

document.body.appendChild(component());
