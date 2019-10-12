(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"],{

/***/ "./src/app/authentication/authentication.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _lock_lock_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lock/lock.component */ "./src/app/authentication/lock/lock.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _authentication_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authentication.routing */ "./src/app/authentication/authentication.routing.ts");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/services.module */ "./src/app/services/services.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_authentication_routing__WEBPACK_IMPORTED_MODULE_7__["AuthenticationRoutes"]),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _services_services_module__WEBPACK_IMPORTED_MODULE_8__["SerivcesModule"]
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _lock_lock_component__WEBPACK_IMPORTED_MODULE_5__["LockComponent"]]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/authentication/authentication.routing.ts ***!
  \**********************************************************/
/*! exports provided: AuthenticationRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutes", function() { return AuthenticationRoutes; });
/* harmony import */ var _lock_lock_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lock/lock.component */ "./src/app/authentication/lock/lock.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");


var AuthenticationRoutes = [
    {
        path: "",
        children: [
            { path: "", redirectTo: "login", pathMatch: "full" },
            {
                path: "lock",
                component: _lock_lock_component__WEBPACK_IMPORTED_MODULE_0__["LockComponent"]
            },
            {
                path: "login",
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/authentication/lock/lock.component.html":
/*!*********************************************************!*\
  !*** ./src/app/authentication/lock/lock.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-wrapper d-flex no-block justify-content-center align-items-center\" style=\"background:url(assets/images/big/auth-bg.jpg) no-repeat center center;\">\r\n    <div class=\"auth-box\">\r\n        <div>\r\n            <div class=\"logo\">\r\n                <span class=\"db\"><img alt=\"thumbnail\" class=\"rounded-circle\" width=\"100\" src=\"assets/images/users/1.jpg\"></span>\r\n                <h5 class=\"font-medium m-b-20\">Genelia</h5>\r\n            </div>\r\n            <!-- Form -->\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <form class=\"form-horizontal m-t-20\" action=\"index.html\">\r\n                        <div class=\"form-group row\">\r\n                            <div class=\"col-12\">\r\n                                <input class=\"form-control form-control-lg\" type=\"password\" required=\"\" placeholder=\"Password\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group text-center\">\r\n                            <div class=\"col-xs-12 p-b-20\">\r\n                                <button class=\"btn btn-block btn-lg btn-info\" type=\"submit\">LOGIN</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/authentication/lock/lock.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/authentication/lock/lock.component.ts ***!
  \*******************************************************/
/*! exports provided: LockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockComponent", function() { return LockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LockComponent = /** @class */ (function () {
    function LockComponent() {
    }
    LockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-lock",
            template: __webpack_require__(/*! ./lock.component.html */ "./src/app/authentication/lock/lock.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], LockComponent);
    return LockComponent;
}());



/***/ }),

/***/ "./src/app/authentication/login/login.component.html":
/*!***********************************************************!*\
  !*** ./src/app/authentication/login/login.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auth-wrapper d-flex no-block justify-content-center align-items-center\" style=\"background:url(assets/images/big/auth-bg.jpg) no-repeat;background-size: 100% 100%;\">\r\n    <div class=\"auth-box\">\r\n        <div id=\"loginform\" [ngClass]=\"{'d-none': recoverform}\">\r\n            <div class=\"logo\">\r\n                <!-- <span class=\"db\"><img src=\"assets/logo.png\" style=\"width: 150px; height: 150px;\" alt=\"logo\" /></span> -->\r\n                <h5 class=\"font-medium m-b-20\">Sign In to Admin</h5>\r\n            </div>\r\n            <!-- Form -->\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <form class=\"form-horizontal m-t-20\" [formGroup]=\"loginForm\"  id=\"loginform\" (ngSubmit)=\"login($event)\">\r\n                        <div class=\"input-group mb-3\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"ti-user\"></i></span>\r\n                            </div>\r\n                            <input formControlName=\"email\" type=\"text\" class=\"form-control form-control-lg\" placeholder=\"Username\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\r\n                        </div>\r\n                        <div class=\"input-group mb-3\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"ti-lock\"></i></span>\r\n                            </div>\r\n                            <input formControlName=\"password\" type=\"password\" class=\"form-control form-control-lg\" placeholder=\"Password\" aria-label=\"Password\" aria-describedby=\"basic-addon1\">\r\n                        </div>\r\n                        <div class=\"form-group row\" *ngIf=\"!!loginError\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"custom-control custom-checkbox\" align=\"center\">\r\n                                    <a (click)=\"toggleRecoverForm()\" href=\"javascript:void(0)\" id=\"to-recover\" class=\"text-dark\">\r\n                                        <i class=\"fa fa-lock m-r-5\"></i>\r\n                                        {{loginError}}\r\n                                    </a>\r\n                                </div>\r\n                            </div>\r\n                        </div><!--                         <div class=\"form-group row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"custom-control custom-checkbox\" align=\"center\">\r\n                                    <a (click)=\"toggleRecoverForm()\" href=\"javascript:void(0)\" id=\"to-recover\" class=\"text-dark\">\r\n                                        <i class=\"fa fa-lock m-r-5\"></i> Forgot password?</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n -->                        <div class=\"form-group text-center\">\r\n                            <div class=\"col-xs-12 p-b-20\">\r\n                                <button class=\"btn btn-block btn-lg btn-info\" type=\"submit\">Log In</button>\r\n                            </div>\r\n                        </div>\r\n<!--                         <div class=\"row\">\r\n                            <div class=\"col-xs-12 col-sm-12 col-md-12 m-t-10 text-center\">\r\n                                <div class=\"social\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-facebook m-r-5\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Login with Facebook\"> <i aria-hidden=\"true\" class=\"fab fa-facebook\"></i> </a>\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-googleplus\" data-toggle=\"tooltip\" title=\"\" data-original-title=\"Login with Google\"> <i aria-hidden=\"true\" class=\"fab fa-google-plus\"></i> </a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group m-b-0 m-t-10\">\r\n                            <div class=\"col-sm-12 text-center\">\r\n                                Don't have an account? <a href=\"#/authentication/signup\" class=\"text-info m-l-5\"><b>Sign Up</b></a>\r\n                            </div>\r\n                        </div>\r\n -->                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div id=\"recoverform\" [ngClass]=\"{'d-block': recoverform}\">\r\n            <div class=\"logo\">\r\n                <span class=\"db\"><img src=\"assets/images/logo-icon.png\" alt=\"logo\" /></span>\r\n                <h5 class=\"font-medium m-b-20\">Recover Password</h5>\r\n                <span>Enter your Email and instructions will be sent to you!</span>\r\n            </div>\r\n            <div class=\"row m-t-20\">\r\n                <!-- Form -->\r\n                <form class=\"col-12\">\r\n                    <!-- email -->\r\n                    <div class=\"form-group row\">\r\n                        <div class=\"col-12\">\r\n                            <input class=\"form-control form-control-lg\" type=\"email\" required=\"\" placeholder=\"Username\">\r\n                        </div>\r\n                    </div>\r\n                    <!-- pwd -->\r\n                    <div class=\"row m-t-20\">\r\n<!--                         <span class=\"col-4\">\r\n                            <button (click)=\"showRecoverForm()\" href=\"javascript:void(0)\" id=\"to-recover\" class=\"text-dark btn btn-lg\"><i class=\"fa fa-cancel m-r-5\"></i>Login</button>\r\n                        </span>\r\n -->                        <div class=\"col-12\">\r\n                            <button class=\"btn btn-block btn-lg btn-danger\" type=\"submit\" name=\"action\">Reset</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"form-group row\">\r\n                <div class=\"col-md-12\" align=\"center\">\r\n                        <a (click)=\"toggleRecoverForm()\" href=\"javascript:void(0)\" id=\"to-recover\" class=\"text-dark btn btn-lg\"><i class=\"fa fa-cancel m-r-5\"></i>Cancel</a>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/authentication/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_authentication_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication/user.service */ "./src/app/services/authentication/user.service.ts");
/* harmony import */ var _services_loading_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/loading-ui.service */ "./src/app/services/loading-ui.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, router, userService, loadingUiService) {
        this.fb = fb;
        this.router = router;
        this.userService = userService;
        this.loadingUiService = loadingUiService;
        this.loginForm = this.fb.group({
            email: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(56)]
            ],
            password: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(32)]
            ]
        });
        this.loginform = true;
        this.recoverform = false;
        this.inputError = { email: null, password: null };
    }
    LoginComponent.prototype.toggleRecoverForm = function () {
        this.loginform = !this.loginform;
        this.recoverform = !this.recoverform;
    };
    LoginComponent.prototype.login = function ($event) {
        console.log($event);
        this.doLogin($event);
    };
    LoginComponent.prototype.doLogin = function (event) {
        var _this = this;
        this.loginError = '';
        this.loadingUiService.setLoading(true);
        this.userService.login(this.loginForm.value).subscribe(function (data) {
            console.log(data);
            if (!data.success) {
                // todo: remove it asap
                _this.loginError = data.message;
                _this.loadingUiService.setLoading(false);
            }
            else {
                console.log('ffffffffff');
                _this.router
                    .navigate(['/manage'])
                    .then(function (a) { return _this.loadingUiService.setLoading(false); });
            }
        }, function (handled) {
            console.log(handled);
            // this.loginError = error.error.statusText + ' : ' + error.error.error.message;
            if (handled.error.statusText) {
                var loginError = handled.error.error;
                if (loginError && loginError.error) {
                    _this.loginError = loginError.message;
                }
                else if (loginError) {
                    _this.loginError = '';
                    _this.inputError.email = loginError.email;
                    _this.inputError.password = loginError.password;
                }
                else {
                    _this.loginError = handled.error.statusText;
                    console.log(_this.loginError);
                }
            }
            else {
                _this.loginError = JSON.stringify(handled.error);
            }
            _this.loadingUiService.setLoading(false);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/authentication/login/login.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_authentication_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_loading_ui_service__WEBPACK_IMPORTED_MODULE_3__["LoadingUiService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ })

}]);
//# sourceMappingURL=authentication-authentication-module.js.map