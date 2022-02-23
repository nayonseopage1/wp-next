"use strict";
exports.id = 332;
exports.ids = [332];
exports.modules = {

/***/ 899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ appContext),
  "Z": () => (/* binding */ component_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
;// CONCATENATED MODULE: ./src/component/Header.js




const Header = ()=>{
    const headerContext = (0,external_react_.useContext)(appContext);
    const headerMenus = headerContext.data.HeaderItems.edges;
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "menuArea",
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            children: headerMenus.map((menuItem)=>{
                return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: menuItem.node.path,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: menuItem.node.label
                        })
                    })
                }, menuItem.node.id));
            })
        })
    }));
};
/* harmony default export */ const component_Header = (Header);

;// CONCATENATED MODULE: ./src/component/Layout.js




const appContext = /*#__PURE__*/ (0,external_react_.createContext)();
const Layout = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(appContext.Provider, {
        value: props.headerMenu,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: "Create Next App"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "description",
                            content: "Generated by create next app"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "stylesheet",
                            href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(component_Header, {}),
                        props.children
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const component_Layout = (Layout);


/***/ }),

/***/ 388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ client)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
    uri: 'https://seia.internaltest.website/graphql',
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()
});


/***/ }),

/***/ 833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apploClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(388);


const getNavData = async ()=>{
    const navData = await _apploClient__WEBPACK_IMPORTED_MODULE_1__/* .client.query */ .L.query({
        query: _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
            query HeaderMenuItems {
                HeaderItems : menuItems(where: {location: PRIMARY}) {
                    edges {
                        node {
                            id
                            label
                            path
                        }
                    }
                }
            }     
        `
    });
    return navData;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNavData);


/***/ })

};
;