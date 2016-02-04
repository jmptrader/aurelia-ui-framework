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
define(["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    var UIGridRow = (function () {
        function UIGridRow(el) {
            this.class = '';
            this._classes = '';
            if (el.hasAttribute('column'))
                this._classes += ' ui-row-column ';
            if (el.hasAttribute('nowrap'))
                this._classes += ' ui-flex-nowrap ';
            if (el.hasAttribute('stretch'))
                this._classes += ' ui-flex-stretch ';
            if (el.hasAttribute('center'))
                this._classes += ' ui-flex-center ';
            if (el.hasAttribute('start'))
                this._classes += ' ui-flex-start ';
            if (el.hasAttribute('end'))
                this._classes += ' ui-flex-end ';
            if (el.hasAttribute('spaced'))
                this._classes += ' ui-flex-spaced ';
        }
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIGridRow.prototype, "class");
        UIGridRow = __decorate([
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('ui-row'), 
            __metadata('design:paramtypes', [Element])
        ], UIGridRow);
        return UIGridRow;
    })();
    exports.UIGridRow = UIGridRow;
});