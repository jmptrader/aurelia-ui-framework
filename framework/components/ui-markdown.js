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
define(["require", "exports", "aurelia-framework", '../utils/ui-converters'], function (require, exports, aurelia_framework_1, ui_converters_1) {
    exports.MarkdownValueConverter = ui_converters_1.MarkdownValueConverter;
    var UIMarkdown = (function () {
        function UIMarkdown(element) {
            this._labelClasses = '';
            this._inputClasses = '';
            this.id = '';
            this.placeholder = '';
            this.readonly = false;
            this.disabled = false;
            this.value = '';
            if (element.hasAttribute('required'))
                this._labelClasses += ' ui-required ';
            if (element.hasAttribute('readonly'))
                this.readonly = true;
            if (element.hasAttribute('disabled'))
                this.disabled = true;
        }
        UIMarkdown.prototype.bind = function () {
            this.value = this.value || '';
        };
        UIMarkdown.prototype.attached = function () {
            this._input = $(this._markdown)
                .data('UIMarkdown', this)
                .find('.ui-input');
            this._input
                .attr(this.readonly !== false ? 'readonly' : 'R', '')
                .attr(this.disabled !== false ? 'disabled' : 'D', '');
        };
        UIMarkdown.prototype.disabledChanged = function (newValue) {
            this._input
                .removeAttr('disabled')
                .attr(newValue !== false ? 'disabled' : 'D', '');
        };
        UIMarkdown.prototype.readonlyChanged = function (newValue) {
            this._input
                .removeAttr('readonly')
                .attr(newValue !== false ? 'readonly' : 'R', '');
        };
        UIMarkdown.prototype._toolClick = function ($event) {
            var id = $($event.target).closest('button').data('id');
            var start = this._input[0].selectionStart, end = this._input[0].selectionEnd, sub = this.value.substr(start, end - start) || 'EditThis';
            var diff = 0;
            if (id == 'preview') {
                this._toggle('preview');
            }
            else if (id == 'help') {
                this._toggle('help');
            }
            else if (id == 'h1') {
                diff = 3;
                this.value = this.value.substr(0, start) + ("\n\n#" + sub + "\n\n") + this.value.substr(end);
            }
            else if (id == 'h2') {
                diff = 4;
                this.value = this.value.substr(0, start) + ("\n\n##" + sub + "\n\n") + this.value.substr(end);
            }
            else if (id == 'h3') {
                diff = 5;
                this.value = this.value.substr(0, start) + ("\n\n###" + sub + "\n\n") + this.value.substr(end);
            }
            else if (id == 'h4') {
                diff = 6;
                this.value = this.value.substr(0, start) + ("\n\n####" + sub + "\n\n") + this.value.substr(end);
            }
            else if (id == 'h5') {
                diff = 7;
                this.value = this.value.substr(0, start) + ("\n\n#####" + sub + "\n\n") + this.value.substr(end);
            }
            else if (id == 'h6') {
                diff = 8;
                this.value = this.value.substr(0, start) + ("\n\n######" + sub + "\n\n") + this.value.substr(end);
            }
            else if (id == 'b') {
                diff = 2;
                this.value = this.value.substr(0, start) + ("__" + sub + "__") + this.value.substr(end);
            }
            else if (id == 'i') {
                diff = 1;
                this.value = this.value.substr(0, start) + ("_" + sub + "_") + this.value.substr(end);
            }
            else if (id == 's') {
                diff = 2;
                this.value = this.value.substr(0, start) + ("~~" + sub + "~~") + this.value.substr(end);
            }
            else if (id == 'a') {
                diff = 1;
                this.value = this.value.substr(0, start) + ("[" + sub + "](" + sub + ")") + this.value.substr(end);
            }
            else if (id == 'img') {
                diff = 2;
                this.value = this.value.substr(0, start) + ("![" + sub + "](" + sub + ")") + this.value.substr(end);
            }
            else if (id == 'ul') {
                diff = 1;
                sub = sub.replace(/^.+$/gm, function (t) { return ("* " + t); });
                this.value = this.value.substr(0, start) + ("\n" + sub + "\n") + this.value.substr(end);
            }
            else if (id == 'ol') {
                diff = 1;
                var i = 1;
                sub = sub.replace(/^.+$/gm, function (t) { return (i++ + ". " + t); });
                this.value = this.value.substr(0, start) + ("\n" + sub + "\n") + this.value.substr(end);
            }
            if (id != 'preview' && id != 'help') {
                this._input.focus();
                this._input[0].selectionStart = start + diff;
                this._input[0].selectionEnd = start + diff + sub.length;
            }
        };
        UIMarkdown.prototype._toggle = function (type) {
            $(this._markdown).find('.ui-close').toggleClass('ui-hide');
            if (type == 'close') {
                $(this._markdown).find('.ui-markdown:not(.ui-hide)').addClass('ui-hide');
            }
            else {
                $(this._markdown).find(".ui-markdown-" + type).toggleClass('ui-hide');
            }
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIMarkdown.prototype, "id");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], UIMarkdown.prototype, "placeholder");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], UIMarkdown.prototype, "readonly");
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], UIMarkdown.prototype, "disabled");
        UIMarkdown = __decorate([
            aurelia_framework_1.bindable({
                name: 'value',
                attribute: 'value',
                defaultBindingMode: aurelia_framework_1.bindingMode.twoWay,
                defaultValue: ''
            }),
            aurelia_framework_1.autoinject(),
            aurelia_framework_1.containerless(),
            aurelia_framework_1.customElement('ui-markdown'), 
            __metadata('design:paramtypes', [Element])
        ], UIMarkdown);
        return UIMarkdown;
    })();
    exports.UIMarkdown = UIMarkdown;
});
