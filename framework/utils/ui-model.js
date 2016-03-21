var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-logging", "./ui-http-service", "aurelia-validation", "./ui-utils"], function (require, exports, aurelia_framework_1, aurelia_logging_1, ui_http_service_1, aurelia_validation_1, ui_utils_1) {
    var UIModel = (function () {
        function UIModel() {
            this.__observers = [];
            var _v = ui_utils_1.Utils.lazy(aurelia_validation_1.Validation);
            Object.defineProperties(this, {
                'httpClient': {
                    value: ui_utils_1.Utils.lazy(ui_http_service_1.UIHttpService),
                    writable: false,
                    enumerable: false
                },
                'validation': {
                    value: _v.on(this, null),
                    writable: false,
                    enumerable: false
                },
                'logger': {
                    value: aurelia_logging_1.getLogger(this.constructor.name),
                    writable: false,
                    enumerable: false
                },
                '__observers': {
                    value: [],
                    writable: true,
                    enumerable: false
                },
                '__original': {
                    value: {},
                    writable: true,
                    enumerable: false
                }
            });
            this.logger.debug("Model Initialized");
        }
        UIModel.prototype.get = function () {
            var rest = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                rest[_i - 0] = arguments[_i];
            }
            throw new Error('Not implemented [get]');
        };
        UIModel.prototype.post = function () {
            var rest = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                rest[_i - 0] = arguments[_i];
            }
            throw new Error('Not implemented [post]');
        };
        UIModel.prototype.put = function () {
            var rest = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                rest[_i - 0] = arguments[_i];
            }
            throw new Error('Not implemented [put]');
        };
        UIModel.prototype.delete = function () {
            var rest = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                rest[_i - 0] = arguments[_i];
            }
            throw new Error('Not implemented [delete]');
        };
        UIModel.prototype.validate = function () {
            return this.validation.validate();
        };
        UIModel.prototype.dispose = function () {
            this.logger.debug("Model Disposing");
            while (this.__observers && this.__observers.length)
                this.__observers.pop().dispose();
        };
        UIModel.prototype.deserialize = function (json) {
            var _this = this;
            this.__original = ui_utils_1._.cloneDeep(json);
            Object.keys(json)
                .forEach(function (key) {
                _this[key] = json[key];
            });
        };
        UIModel.prototype.serialize = function () {
            try {
                return this._serializeObject(this);
            }
            catch (e) {
                throw new Error("Error serializing object [" + this.constructor.name + "]");
            }
        };
        UIModel.prototype._serializeObject = function (o) {
            var _this = this;
            var _pojo = {};
            Object.keys(o)
                .forEach(function (key) {
                if (key !== 'undefined' && !/^__/.test(key)) {
                    if (ui_utils_1._.isObject(o[key])) {
                        _pojo[key] = _this._serializeObject(o[key]);
                    }
                    else if (ui_utils_1._.isArray(o[key])) {
                        _pojo[key] = o[key].join(',');
                    }
                    else {
                        _pojo[key] = o[key] || null;
                    }
                }
            });
            return _pojo;
        };
        UIModel.prototype.isDirty = function () {
            var _this = this;
            if (ui_utils_1._.isEmpty(this.__original)) {
                Object.keys(this)
                    .forEach(function (key) {
                    if (key !== 'undefined' && !/^__/.test(key))
                        _this.__original[key] = _this[key];
                });
            }
            return this._checkDirty(this.__original, this);
        };
        UIModel.prototype._checkDirty = function (o, t) {
            var _this = this;
            return !Object.keys(o)
                .every(function (key) {
                if (t[key] instanceof UIModel)
                    return !t[key].isDirty();
                if (ui_utils_1._.isArray(o[key]) && o[key].length != t[key].length)
                    return false;
                if (ui_utils_1._.isArray(o[key]) || ui_utils_1._.isObject(o[key]))
                    return !_this._checkDirty(o[key], t[key]);
                if (t[key] !== o[key])
                    _this.logger.debug(key, o[key], t[key], t[key] === o[key]);
                return t.hasOwnProperty(key) && (t[key] === o[key]);
            });
        };
        UIModel.prototype.saveChanges = function () {
            this.__original = ui_utils_1._.cloneDeep(this.serialize());
        };
        UIModel.prototype.discardChanges = function () {
            var _this = this;
            Object.keys(ui_utils_1._.cloneDeep(this.__original))
                .forEach(function (key) {
                _this[key] = _this.__original[key];
            });
        };
        UIModel = __decorate([
            aurelia_framework_1.transient(), 
            __metadata('design:paramtypes', [])
        ], UIModel);
        return UIModel;
    })();
    exports.UIModel = UIModel;
});
