(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{3149:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var enterModule,reactHotLoader,leaveModule,_HomePageSearchBar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3219);__webpack_require__.d(__webpack_exports__,"HomePageSearchBar",(function(){return _HomePageSearchBar__WEBPACK_IMPORTED_MODULE_0__.a})),(enterModule=__webpack_require__(1).enterModule)&&enterModule(module),reactHotLoader=__webpack_require__(1).default,leaveModule=__webpack_require__(1).leaveModule,reactHotLoader&&leaveModule(module)}.call(this,__webpack_require__(3)(module))},3219:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return HomePageSearchBar}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(23),_SearchBar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(628),_util__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3825);var enterModule;(enterModule=__webpack_require__(1).enterModule)&&enterModule(module);const useStyles=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.a)({searchBar:{border:"1px solid #555",borderRadius:"6px",fontSize:"1.5em"}}),HomePageSearchBar=({placeholder:placeholder})=>{const[query,setQuery]=react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(""),handleSearch=Object(_util__WEBPACK_IMPORTED_MODULE_3__.a)(),classes=useStyles(),handleChange=react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback((value=>{setQuery(value)}),[setQuery]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchBar__WEBPACK_IMPORTED_MODULE_2__.SearchBarBase,{onSubmit:()=>{handleSearch({query:query})},onChange:handleChange,value:query,className:classes.searchBar,placeholder:placeholder,__self:void 0,__source:{fileName:"/home/runner/work/backstage-search-github-issues-plugin/backstage-search-github-issues-plugin/plugins/search/src/components/HomePageComponent/HomePageSearchBar.tsx",lineNumber:52}})};var reactHotLoader,leaveModule;reactHotLoader=__webpack_require__(1).default,leaveModule=__webpack_require__(1).leaveModule,reactHotLoader&&(reactHotLoader.register(useStyles,"useStyles","/home/runner/work/backstage-search-github-issues-plugin/backstage-search-github-issues-plugin/plugins/search/src/components/HomePageComponent/HomePageSearchBar.tsx"),reactHotLoader.register(HomePageSearchBar,"HomePageSearchBar","/home/runner/work/backstage-search-github-issues-plugin/backstage-search-github-issues-plugin/plugins/search/src/components/HomePageComponent/HomePageSearchBar.tsx"),leaveModule(module));try{HomePageSearchBar.displayName="HomePageSearchBar",HomePageSearchBar.__docgenInfo={description:"",displayName:"HomePageSearchBar",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../plugins/search/src/components/HomePageComponent/HomePageSearchBar.tsx#HomePageSearchBar"]={docgenInfo:HomePageSearchBar.__docgenInfo,name:"HomePageSearchBar",path:"../../plugins/search/src/components/HomePageComponent/HomePageSearchBar.tsx#HomePageSearchBar"})}catch(__react_docgen_typescript_loader_error){}}).call(this,__webpack_require__(3)(module))},3825:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(module){__webpack_require__.d(__webpack_exports__,"a",(function(){return useNavigateToQuery}));var enterModule,qs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(154),qs__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(14),_plugin__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1704),_backstage_core_plugin_api__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6);(enterModule=__webpack_require__(1).enterModule)&&enterModule(module);const useNavigateToQuery=()=>{const searchRoute=Object(_backstage_core_plugin_api__WEBPACK_IMPORTED_MODULE_4__.useRouteRef)(_plugin__WEBPACK_IMPORTED_MODULE_3__.a),navigate=Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.k)();return Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((({query:query})=>{const queryString=qs__WEBPACK_IMPORTED_MODULE_0___default.a.stringify({query:query},{addQueryPrefix:!0});navigate(`${searchRoute()}${queryString}`)}),[navigate,searchRoute])};var reactHotLoader,leaveModule;reactHotLoader=__webpack_require__(1).default,leaveModule=__webpack_require__(1).leaveModule,reactHotLoader&&(reactHotLoader.register(useNavigateToQuery,"useNavigateToQuery","/home/runner/work/backstage-search-github-issues-plugin/backstage-search-github-issues-plugin/plugins/search/src/components/util.ts"),leaveModule(module))}).call(this,__webpack_require__(3)(module))}}]);