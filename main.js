define(["require", "exports", 'jquery', 'lodash', 'moment', 'numeral', 'libs/chosen', 'libs/notify', 'libs/marked', 'libs/phonelib', 'libs/countries', 'libs/datepicker'], function (require, exports) {
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .developmentLogging()
            .feature('framework')
            .plugin('aurelia-validation');
        aurelia.start().then(function (a) { return a.setRoot('src/app.js'); });
    }
    exports.configure = configure;
});