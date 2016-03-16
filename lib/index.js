'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _through = require('through2');

var _through2 = _interopRequireDefault(_through);

var _resolve = require('resolve');

var _resolve2 = _interopRequireDefault(_resolve);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (options) {
    return _through2.default.obj(function (file, encoding, callback) {
        var Launcher = require(_path2.default.join(_path2.default.dirname(_resolve2.default.sync('webdriverio')), 'lib/launcher'));

        var launcher = new Launcher(file.path, options);

        launcher.run().then(function (code) {
            process.exit(code);
            callback(null);
        }, function (e) {
            process.nextTick(function () {
                throw e;
            });
        });
    });
};