webpackHotUpdate("static/development/pages/skills.js",{

/***/ "./components/TextLoop.jsx":
/*!*********************************!*\
  !*** ./components/TextLoop.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var simple_icons_react_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! simple-icons-react-component */ "./node_modules/simple-icons-react-component/lib/index.js");
/* harmony import */ var simple_icons_react_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(simple_icons_react_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_text_loop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-text-loop */ "./node_modules/react-text-loop/es/index.js");
var _jsxFileName = "/Users/tank/git/Portfolio/next-portfolio/components/TextLoop.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var TextLooper = function TextLooper() {
  var namesOfSkills = ["three.js", "passion", "teams", "friends", "open-source", "Raspberry Pi", "Arduino", "Next.js", "React", "Redux", "GraphQL", "Node.js", "JavaScript", "PostgreSQL", "Apache", "Docker", "Debian", "Linux", "Adobe Illustrator", "GIMP", "Sass", "Ripple", "Mapbox"];
  var characters = "日アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンあいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      skillsWithCharacters = _useState[0],
      setSkillsWithCharacters = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!skillsWithCharacters) {
      var finalArray = getArrSkillsWithCharacters(namesOfSkills, characters);
      setSkillsWithCharacters(finalArray);
    }
  }, []);

  var getRandomInt = function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }; // const getNumberOfRandomCharacters = (number, chars) => {
  //     if (!number) number = 9;
  //     return chars.substr(getRandomInt(0, chars.length - number), number + 1)
  // }


  var getArrSkillsWithCharacters = function getArrSkillsWithCharacters(skills, chars) {
    var skillCharArr = [];

    for (var i = 0; i <= 88; i++) {
      var selectSkill = skills[getRandomInt(0, namesOfSkills.length - 1)]; // let createChars = getNumberOfRandomCharacters(selectSkill.length - 1, chars)

      skillCharArr.push(selectSkill);
    }

    ;
    return skillCharArr;
  };

  return __jsx("main", {
    className: "main__textlooper header-major",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: "block__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "I love building with\xA0"), skillsWithCharacters ? __jsx(react_text_loop__WEBPACK_IMPORTED_MODULE_2__["default"], {
    interval: [2000, 3000],
    delay: 0,
    mask: false,
    fade: true,
    noWrap: false,
    springConfig: {
      stiffness: 300,
      damping: 53,
      precision: 0.1
    },
    adjustingSpeed: 150,
    className: "text-loop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, skillsWithCharacters.map(function (entry, index) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: index + "-" + entry,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, skillsWithCharacters[index]), __jsx(simple_icons_react_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
      name: entry,
      className: "icon--skills",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }));
  })) : null);
};

/* harmony default export */ __webpack_exports__["default"] = (TextLooper);

/***/ })

})
//# sourceMappingURL=skills.js.c9e308b72be7e590b1e2.hot-update.js.map