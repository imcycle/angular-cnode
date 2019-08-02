(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- <div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n</div> -->\r\n\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/center-page/center-page.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/center-page/center-page.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  center page\r\n  <tabbar-component></tabbar-component>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/collect-page/collect-page.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/collect-page/collect-page.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  collect page\r\n  <tabbar-component></tabbar-component>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/error404-page/error404-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/error404-page/error404-page.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h2>404</h2>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home-page/home-page.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home-page/home-page.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  home page\r\n  <tabbar-component></tabbar-component>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/test-page/test-page.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/test-page/test-page.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>父子组件</h2>\r\n<test-component #chlid [fatherNum]=\"fatherNum\" (fatherClick)=\"onFatherClick($event)\">\r\n</test-component>\r\n<div style=\"padding: 20px; margin: 20px; border: 1px solid #000;\">\r\n  <h3>父组件</h3>\r\n  <h4>父组件调用子组件方法 @ViewChild</h4>\r\n  <button (click)=\"chlid.sonValueChange(1)\">ViewChild +</button>\r\n  <button (click)=\"chlid.sonValueChange(2)\">ViewChild -</button>\r\n</div>\r\n\r\n\r\n\r\n\r\n<h2>ngFor</h2>\r\n<div class=\"box\" *ngFor=\"let item of ngForList\">\r\n  <div>{{ item.name }}</div>\r\n\r\n  <h3>ngIf:\r\n    <ng-container *ngIf=\"item.checked; else elseTemplate\">\r\n      选中\r\n    </ng-container>\r\n    <ng-template #elseTemplate>\r\n      未选中\r\n    </ng-template>\r\n  </h3>\r\n\r\n  <div>\r\n    {{item.n1 + item.n2}}\r\n    {{\"item.n1 + item.n2\"}}\r\n  </div>\r\n  <a [title]=\"item.name + ' details'\">\r\n    {{ item.name }}\r\n  </a>\r\n\r\n  <div>\r\n    {{\r\n    *ngFor\r\n    <br />\r\n    *ngIf\r\n    Interpolation \\{\\{ \\}\\}\r\n    Property binding [ ]\r\n    Event binding ( )\r\n    \r\n    }}\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/tabbar/tabbar.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/tabbar/tabbar.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\r\n  <div class=\"item\" *ngFor=\"let item of TabbarList\" (click)=\"gogogo(item)\">\r\n    <img src=\"{{item.icon}}\" />\r\n    <span class=\"{{item.checked?'blue': ''}}\">{{item.name}}</span>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/test/test.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/test/test.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\r\n  <h3>子组件</h3>\r\n\r\n  <hr />\r\n\r\n  <h4>子组件事件</h4>\r\n  <div>my value: {{clickNum}}</div>\r\n  <button (click)=\"myClick(1)\">click +</button>\r\n  <button (click)=\"myClick(2)\">click -</button>\r\n\r\n  <hr />\r\n\r\n  <h4>父组件传值给子组件 @Input</h4>\r\n  <div>props value: {{fatherNum}}</div>\r\n  <h4>子组件调用父组件方法 @Output</h4>\r\n  <button (click)=\"sonClick(1)\">click father +</button>\r\n  <button (click)=\"sonClick(2)\">click father -</button>\r\n\r\n  <hr />\r\n\r\n  <h4>父组件调用子组件方法 @ViewChild</h4>\r\n  <div>sonValue： {{sonValue}}</div>\r\n\r\n  <hr />\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _pages_collect_page_collect_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/collect-page/collect-page.component */ "./src/app/pages/collect-page/collect-page.component.ts");
/* harmony import */ var _pages_center_page_center_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/center-page/center-page.component */ "./src/app/pages/center-page/center-page.component.ts");
/* harmony import */ var _pages_error404_page_error404_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/error404-page/error404-page.component */ "./src/app/pages/error404-page/error404-page.component.ts");
/* harmony import */ var _pages_test_page_test_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/test-page/test-page.component */ "./src/app/pages/test-page/test-page.component.ts");








var routes = [
    { path: 'home', component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
    { path: 'collect', component: _pages_collect_page_collect_page_component__WEBPACK_IMPORTED_MODULE_4__["CollectPageComponent"] },
    { path: 'center', component: _pages_center_page_center_page_component__WEBPACK_IMPORTED_MODULE_5__["CenterPageComponent"] },
    { path: '404', component: _pages_error404_page_error404_page_component__WEBPACK_IMPORTED_MODULE_6__["Error404PageComponent"] },
    { path: 'test', component: _pages_test_page_test_page_component__WEBPACK_IMPORTED_MODULE_7__["TestPageComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/404' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-cnode';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _pages_collect_page_collect_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/collect-page/collect-page.component */ "./src/app/pages/collect-page/collect-page.component.ts");
/* harmony import */ var _pages_center_page_center_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/center-page/center-page.component */ "./src/app/pages/center-page/center-page.component.ts");
/* harmony import */ var _pages_error404_page_error404_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/error404-page/error404-page.component */ "./src/app/pages/error404-page/error404-page.component.ts");
/* harmony import */ var _pages_test_page_test_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/test-page/test-page.component */ "./src/app/pages/test-page/test-page.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ],
            declarations: [
                _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"],
                _pages_collect_page_collect_page_component__WEBPACK_IMPORTED_MODULE_7__["CollectPageComponent"],
                _pages_center_page_center_page_component__WEBPACK_IMPORTED_MODULE_8__["CenterPageComponent"],
                _pages_error404_page_error404_page_component__WEBPACK_IMPORTED_MODULE_9__["Error404PageComponent"],
                _pages_test_page_test_page_component__WEBPACK_IMPORTED_MODULE_10__["TestPageComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/center-page/center-page.component.less":
/*!**************************************************************!*\
  !*** ./src/app/pages/center-page/center-page.component.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NlbnRlci1wYWdlL2NlbnRlci1wYWdlLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/pages/center-page/center-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/center-page/center-page.component.ts ***!
  \************************************************************/
/*! exports provided: CenterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CenterPageComponent", function() { return CenterPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CenterPageComponent = /** @class */ (function () {
    function CenterPageComponent() {
    }
    CenterPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'center-page-component',
            template: __webpack_require__(/*! raw-loader!./center-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/center-page/center-page.component.html"),
            styles: [__webpack_require__(/*! ./center-page.component.less */ "./src/app/pages/center-page/center-page.component.less")]
        })
    ], CenterPageComponent);
    return CenterPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/collect-page/collect-page.component.less":
/*!****************************************************************!*\
  !*** ./src/app/pages/collect-page/collect-page.component.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbGxlY3QtcGFnZS9jb2xsZWN0LXBhZ2UuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/collect-page/collect-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/collect-page/collect-page.component.ts ***!
  \**************************************************************/
/*! exports provided: CollectPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectPageComponent", function() { return CollectPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CollectPageComponent = /** @class */ (function () {
    function CollectPageComponent() {
    }
    CollectPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'collect-page-component',
            template: __webpack_require__(/*! raw-loader!./collect-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/collect-page/collect-page.component.html"),
            styles: [__webpack_require__(/*! ./collect-page.component.less */ "./src/app/pages/collect-page/collect-page.component.less")]
        })
    ], CollectPageComponent);
    return CollectPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/error404-page/error404-page.component.less":
/*!******************************************************************!*\
  !*** ./src/app/pages/error404-page/error404-page.component.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Vycm9yNDA0LXBhZ2UvZXJyb3I0MDQtcGFnZS5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/error404-page/error404-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/error404-page/error404-page.component.ts ***!
  \****************************************************************/
/*! exports provided: Error404PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404PageComponent", function() { return Error404PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Error404PageComponent = /** @class */ (function () {
    function Error404PageComponent() {
    }
    Error404PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'error404-page-component',
            template: __webpack_require__(/*! raw-loader!./error404-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/error404-page/error404-page.component.html"),
            styles: [__webpack_require__(/*! ./error404-page.component.less */ "./src/app/pages/error404-page/error404-page.component.less")]
        })
    ], Error404PageComponent);
    return Error404PageComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.less":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home-page-component',
            template: __webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.less */ "./src/app/pages/home-page/home-page.component.less")]
        })
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/test-page/test-page.component.less":
/*!**********************************************************!*\
  !*** ./src/app/pages/test-page/test-page.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  border: 1px solid #000;\n  margin-bottom: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVzdC1wYWdlL0U6L2NvZGVfZ2l0aHViL2FuZ3VsYXItY25vZGUvc3JjL2FwcC9wYWdlcy90ZXN0LXBhZ2UvdGVzdC1wYWdlLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9wYWdlcy90ZXN0LXBhZ2UvdGVzdC1wYWdlLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGVzdC1wYWdlL3Rlc3QtcGFnZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufSIsIi5ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/test-page/test-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/test-page/test-page.component.ts ***!
  \********************************************************/
/*! exports provided: TestPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageComponent", function() { return TestPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestPageComponent = /** @class */ (function () {
    function TestPageComponent() {
        var _this = this;
        this.fatherNum = 0;
        this.onFatherClick = function (num) {
            if (num === 1) {
                _this.fatherNum++;
            }
            else if (num === 2) {
                _this.fatherNum--;
            }
        };
        this.ngForList = [
            { id: 1, name: '11111', n1: 1, n2: 3, title: '11', checked: true },
            { id: 2, name: '22222', n1: 7, n2: 3, title: '22', checked: false },
            { id: 3, name: '33333', n1: 2, n2: 3, title: '33', checked: true },
            { id: 4, name: '44444', n1: 9, n2: 3, title: '44', checked: false },
        ];
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chlid', { static: false })
    ], TestPageComponent.prototype, "chlid", void 0);
    TestPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'test-page-component',
            template: __webpack_require__(/*! raw-loader!./test-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/test-page/test-page.component.html"),
            styles: [__webpack_require__(/*! ./test-page.component.less */ "./src/app/pages/test-page/test-page.component.less")]
        })
    ], TestPageComponent);
    return TestPageComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/tabbar/tabbar.component.less":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/tabbar/tabbar.component.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100vw;\n  height: 50px;\n  border-top: 1px solid #ebedf0;\n  padding-top: 5px;\n  box-sizing: border-box;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.item {\n  -webkit-box-flex: 1;\n          flex: 1;\n  text-align: center;\n}\n.item img {\n  width: 18px;\n  height: 18px;\n}\n.item span {\n  display: block;\n  font-size: 12px;\n  color: #7d7e80;\n}\n.blue {\n  color: #1989fa !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFiYmFyL0U6L2NvZGVfZ2l0aHViL2FuZ3VsYXItY25vZGUvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90YWJiYXIvdGFiYmFyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90YWJiYXIvdGFiYmFyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDQ0Y7QURFQTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGtCQUFBO0FDQUY7QURGQTtFQUlJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7QUROQTtFQVFJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NKO0FESUE7RUFDRSx5QkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFiYmFyL3RhYmJhci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWJlZGYwO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5pdGVtIHtcbiAgZmxleDogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBpbWcge1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgfVxuICBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM3ZDdlODA7XG4gIH1cbiAgXG59XG5cbi5ibHVlIHtcbiAgY29sb3I6ICMxOTg5ZmEhaW1wb3J0YW50O1xufSIsIi5ib3gge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWJlZGYwO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaXRlbSB7XG4gIGZsZXg6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pdGVtIGltZyB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG59XG4uaXRlbSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM3ZDdlODA7XG59XG4uYmx1ZSB7XG4gIGNvbG9yOiAjMTk4OWZhICFpbXBvcnRhbnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/tabbar/tabbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/tabbar/tabbar.component.ts ***!
  \**************************************************************/
/*! exports provided: TabbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabbarComponent", function() { return TabbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var TabbarComponent = /** @class */ (function () {
    function TabbarComponent(router) {
        var _this = this;
        this.router = router;
        this.TabbarList = TabbarList;
        this.gogogo = function (item) {
            _this.router.navigate([item.link]);
        };
    }
    TabbarComponent.prototype.ngOnInit = function () {
        this.TabbarList.forEach(function (d) {
            if (window.location.pathname.indexOf(d.link) !== -1) {
                d.checked = true;
            }
            else {
                d.checked = false;
            }
        });
    };
    TabbarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    TabbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tabbar-component',
            template: __webpack_require__(/*! raw-loader!./tabbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/tabbar/tabbar.component.html"),
            styles: [__webpack_require__(/*! ./tabbar.component.less */ "./src/app/shared/components/tabbar/tabbar.component.less")]
        })
    ], TabbarComponent);
    return TabbarComponent;
}());

var TabbarList = [
    Object.defineProperties({}, {
        key: {
            value: 'home',
            writable: false,
            enumerable: true,
            configurable: false,
        },
        name: {
            value: '首页',
            writable: false,
            enumerable: true,
            configurable: false,
        },
        link: {
            value: '/home',
            writable: false,
            enumerable: true,
            configurable: false,
        },
        icon: {
            value: '/assets/images/timg.jpg',
            writable: false,
            enumerable: true,
            configurable: false,
        },
        checked: {
            value: false,
            writable: true,
            enumerable: true,
            configurable: true,
        }
    }),
    Object.defineProperties({}, {
        key: {
            value: 'collect',
            writable: false,
            enumerable: true,
            configurable: false,
        },
        name: {
            value: '收藏',
            writable: false,
            enumerable: true,
            configurable: false,
        },
        link: {
            value: '/collect',
            writable: false,
            enumerable: true,
            configurable: false,
        },
        icon: {
            value: '/assets/images/timg.jpg',
            writable: false,
            enumerable: true,
            configurable: false,
        },
        checked: {
            value: false,
            writable: true,
            enumerable: true,
            configurable: true,
        }
    }),
    Object.defineProperties({}, {
        key: {
            value: 'center',
            writable: false,
            enumerable: true,
            configurable: false,
        },
        name: {
            value: '我的',
            writable: false,
            enumerable: true,
            configurable: false,
        },
        link: {
            value: '/center',
            writable: false,
            enumerable: true,
            configurable: false,
        },
        icon: {
            value: '/assets/images/timg.jpg',
            writable: false,
            enumerable: true,
            configurable: false,
        },
        checked: {
            value: false,
            writable: true,
            enumerable: true,
            configurable: true,
        }
    }),
];


/***/ }),

/***/ "./src/app/shared/components/test/test.component.less":
/*!************************************************************!*\
  !*** ./src/app/shared/components/test/test.component.less ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  border: 1px solid #000;\n  padding: 20px;\n  margin: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGVzdC9FOi9jb2RlX2dpdGh1Yi9hbmd1bGFyLWNub2RlL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGVzdC90ZXN0LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90ZXN0L3Rlc3QuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90ZXN0L3Rlc3QuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAyMHB4O1xufSIsIi5ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDIwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/test/test.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/test/test.component.ts ***!
  \**********************************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestComponent = /** @class */ (function () {
    function TestComponent() {
        var _this = this;
        this.fatherClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.clickNum = 0;
        this.sonValue = 0;
        this.sonClick = function (num) {
            _this.fatherClick.emit(num);
        };
        this.myClick = function (num) {
            if (num === 1) {
                _this.clickNum++;
            }
            else if (num === 2) {
                _this.clickNum--;
            }
        };
        this.sonValueChange = function (num) {
            if (num === 1) {
                _this.sonValue++;
            }
            else if (num === 2) {
                _this.sonValue--;
            }
        };
        // ngOnChanges() {
        //   console.log('ngOnChanges')
        //   // Angular（重新）设置数据绑定输入属性时的响应。该方法接收SimpleChanges当前和先前属性值的对象。
        //   // ngOnInit()在一个或多个数据绑定输入属性发生更改 之前和之后调用。
        // }
        // ngOnInit() {
        //   console.log('ngOnInit')
        //   // 在Angular首次显示数据绑定属性并设置指令 / 组件的输入属性后初始化指令 / 组件。
        //   // 在第一次之后 调用一次。 ngOnChanges()
        // }
        // ngDoCheck() {
        //   console.log('ngDoCheck')
        //   // 检测Angular无法或不会自行检测的更改并采取相应措施。
        //   // 在每次更改检测运行期间，在ngOnChanges()和之后立即调用ngOnInit() 。
        // }
        // ngAfterContentInit() {
        //   console.log('ngAfterContentInit')
        //   // 在Angular将外部内容投影到组件的视图 / 指令所在的视图后进行响应。
        //   // 在第一次之后 调用一次ngDoCheck() 。
        // }
        // ngAfterContentChecked() {
        //   console.log('ngAfterContentChecked')
        //   // 在Angular检查投射到指令 / 组件中的内容后响应。
        //   // 在ngAfterContentInit()随后和随后的每一次调用之后ngDoCheck() 。
        // }
        // ngAfterViewInit() {
        //   console.log('ngAfterViewInit')
        //   // 在Angular初始化组件的视图和子视图/指令所在的视图后响应。
        //   // 在第一次之后 调用一次ngAfterContentChecked() 。
        // }
        // ngAfterViewChecked() {
        //   console.log('ngAfterViewChecked')
        //   // 在Angular检查组件的视图和子视图/指令所在的视图后响应。
        //   // 在ngAfterViewInit()随后和随后的每一次调用之后ngAfterContentChecked() 。
        // }
        // ngOnDestroy() {
        //   console.log('ngOnDestroy')
        //   // 就在Angular破坏指令 / 组件之前进行清理。取消订阅Observable并分离事件处理程序以避免内存泄漏。
        //   // 在 Angular破坏指令 / 组件之前 调用。
        // }
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], TestComponent.prototype, "fatherNum", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], TestComponent.prototype, "fatherClick", void 0);
    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'test-component',
            template: __webpack_require__(/*! raw-loader!./test.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.less */ "./src/app/shared/components/test/test.component.less")]
        })
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _components_tabbar_tabbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tabbar/tabbar.component */ "./src/app/shared/components/tabbar/tabbar.component.ts");
/* harmony import */ var _components_test_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/test/test.component */ "./src/app/shared/components/test/test.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            ],
            declarations: [
                _components_tabbar_tabbar_component__WEBPACK_IMPORTED_MODULE_3__["TabbarComponent"],
                _components_test_test_component__WEBPACK_IMPORTED_MODULE_4__["TestComponent"],
            ],
            exports: [
                _components_tabbar_tabbar_component__WEBPACK_IMPORTED_MODULE_3__["TabbarComponent"],
                _components_test_test_component__WEBPACK_IMPORTED_MODULE_4__["TestComponent"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\code_github\angular-cnode\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map