"use strict";
(() => {
var exports = {};
exports.id = 921;
exports.ids = [921];
exports.modules = {

/***/ 260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_About),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/component/AboutPage.js


const AboutPage = ({ AboutPageData  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: AboutPageData.aboutTitle
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: AboutPageData.aboutContent
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: AboutPageData.aboutImage.sourceUrl,
                alt: ""
            })
        ]
    }));
};
/* harmony default export */ const component_AboutPage = (AboutPage);

// EXTERNAL MODULE: ./src/component/Layout.js + 1 modules
var Layout = __webpack_require__(899);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(114);
// EXTERNAL MODULE: ./src/inc/apploClient.js
var apploClient = __webpack_require__(388);
;// CONCATENATED MODULE: ./src/inc/aboutData.js


const aboutData = async ()=>{
    const AboutPageData = await apploClient/* client.query */.L.query({
        query: client_.gql`
        query AboutData {
            AboutPage: pageBy(uri: "https://seia.internaltest.website/about-us/") {
              aboutPage {
                aboutContent
                aboutTitle
                aboutImage {
                  sourceUrl
                }
              }
            }
          }       
        `
    });
    return AboutPageData;
};
/* harmony default export */ const inc_aboutData = (aboutData);

// EXTERNAL MODULE: ./src/inc/getNavData.js
var getNavData = __webpack_require__(833);
;// CONCATENATED MODULE: ./pages/About.js





const About = ({ headerMenu , aboutData: aboutData1  })=>{
    const AboutPageData = aboutData1.data.AboutPage.aboutPage;
    console.log(aboutData1);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        headerMenu: headerMenu,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: "About Us"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(component_AboutPage, {
                AboutPageData: AboutPageData
            })
        ]
    }));
};
async function getStaticProps(context) {
    return {
        props: {
            headerMenu: await (0,getNavData/* default */.Z)(),
            aboutData: await inc_aboutData()
        }
    };
}
/* harmony default export */ const pages_About = (About);


/***/ }),

/***/ 114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,332], () => (__webpack_exec__(260)));
module.exports = __webpack_exports__;

})();