var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../utils/ui-event", "../utils/ui-utils", "../utils/ui-model", "../utils/ui-application"], function (require, exports, aurelia_framework_1, ui_event_1, ui_utils_1, ui_model_1, ui_application_1) {
    "use strict";
    var UILogin = (function () {
        function UILogin(element, appState) {
            this.element = element;
            this.appState = appState;
            this.busy = false;
            this.model = new LoginModel();
        }
        UILogin.prototype.attached = function () {
            if (this.model.remember === true)
                this.doLogin();
            this.__content.appendChild(this.__temp);
        };
        UILogin.prototype.doLogin = function () {
            var _this = this;
            this.error = '';
            this.model.validate()
                .then(function () {
                ui_event_1.UIEvent.fireEvent('login', _this.element, _this.model);
            })
                .catch(function (e) {
            });
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UILogin.prototype, "error", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], UILogin.prototype, "busy", void 0);
        UILogin = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.customElement('ui-login'), 
            __metadata('design:paramtypes', [Element, ui_application_1.UIApplication])
        ], UILogin);
        return UILogin;
    }());
    exports.UILogin = UILogin;
    var LoginModel = (function (_super) {
        __extends(LoginModel, _super);
        function LoginModel() {
            _super.call(this);
            this.username = '';
            this.password = '';
            this.remember = false;
            var _u, _p;
            this.appState = ui_utils_1.UIUtils.lazy(ui_application_1.UIApplication);
            if ((_u = this.appState.persist('AppUsername')) !== null) {
                this.username = _u;
            }
            if ((_p = this.appState.persist('AppPassword')) !== null) {
                this.password = _p;
                this.remember = true;
            }
            this.validation
                .ensure('username', null)
                .isNotEmpty()
                .isEmail()
                .ensure('password', null)
                .isNotEmpty();
        }
        LoginModel.prototype.save = function () {
            this.appState.persist('AppUsername', this.username);
            this.appState.persist('AppPassword', this.remember ? this.password : null);
        };
        LoginModel = __decorate([
            aurelia_framework_1.transient(),
            aurelia_framework_1.autoinject(), 
            __metadata('design:paramtypes', [])
        ], LoginModel);
        return LoginModel;
    }(ui_model_1.UIModel));
    exports.LoginModel = LoginModel;
});