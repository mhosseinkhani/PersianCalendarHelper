"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringHelper = /** @class */ (function () {
    function StringHelper() {
    }
    StringHelper.prototype.padLeft = function (num, size) {
        var s = num + "";
        while (s.length < size)
            s = "0" + s;
        return s;
    };
    StringHelper.prototype.padRight = function (num, size) {
        var s = num + "";
        while (s.length < size)
            s = s + "0";
        return s;
    };
    return StringHelper;
}());
exports.StringHelper = StringHelper;
