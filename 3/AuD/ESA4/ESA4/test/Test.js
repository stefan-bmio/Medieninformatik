"use strict";
exports.__esModule = true;
var Test = /** @class */ (function () {
    function Test(name, testFn) {
        this.name = name;
        this.testFn = testFn;
        this.auxiliary = "";
    }
    Test.prototype.test = function () {
        var isPass = this.testFn();
        // let log: string = this.name;
        // if (this.auxiliary !== null) {
        //     log += " (" + this.auxiliary + ")";
        // }
        // log += ": %c" + (isPass ? "passed" : "failure");
        //
        // console.log(log, "color: " + (isPass ? "green" : "red"));
        var black = "color: black;";
        var green = "color: green;";
        var red = "color: red";
        if (isPass) {
            console.groupCollapsed("%cpassed: %c" + this.name, green, black);
        }
        else {
            console.group("%cfailed: %c" + this.name, red, black);
        }
        console.table({ "name": this.name, "auxiliary": this.auxiliary });
        console.groupEnd();
    };
    Test.prototype.getName = function () {
        return this.name;
    };
    Test.prototype.auxiliaryLog = function (auxiliary) {
        this.auxiliary = auxiliary;
    };
    return Test;
}());
exports.Test = Test;
//# sourceMappingURL=Test.js.map