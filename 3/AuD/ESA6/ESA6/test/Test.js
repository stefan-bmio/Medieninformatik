"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Test = /** @class */ (function () {
    function Test(name, fn) {
        this.name = name;
        this.fn = fn;
    }
    Test.prototype.run = function () {
        var testResult = this.fn().toTestResult();
        this.updateConsole(testResult.success, testResult.message, testResult.detail);
    };
    Test.prototype.updateConsole = function (isSuccess, message, detail) {
        var container = document.getElementById('consoleContainer');
        if (!isSuccess) {
            container.classList.add(Test.FAILURE_CONSOLE_CONTAINER_STYLE_CLASS);
        }
        var table = document.getElementById('console');
        var row = table.insertRow();
        var nameCell = row.insertCell();
        var resultCell = row.insertCell();
        var messageCell = row.insertCell();
        var detailCell = row.insertCell();
        nameCell.classList.add(Test.CONSOLE_CELL_STYLE_CLASS, Test.TEST_NAME_STYLE_CLASS);
        nameCell.innerHTML = this.name;
        resultCell.classList.add(Test.CONSOLE_CELL_STYLE_CLASS);
        if (isSuccess) {
            resultCell.classList.add(Test.SUCCESS_STYLE_CLASS);
            resultCell.innerHTML = Test.SUCCESS_RESULT_MESSAGE;
        }
        else {
            resultCell.classList.add(Test.FAILURE_STYLE_CLASS);
            resultCell.innerHTML = Test.FAILURE_RESULT_MESSAGE;
        }
        messageCell.classList.add(Test.CONSOLE_CELL_STYLE_CLASS);
        messageCell.innerHTML = message;
        detailCell.classList.add(Test.CONSOLE_CELL_STYLE_CLASS);
        detailCell.innerHTML = detail;
    };
    Test.FAILURE_CONSOLE_CONTAINER_STYLE_CLASS = 'hasFailures';
    Test.CONSOLE_CELL_STYLE_CLASS = "consoleCell";
    Test.TEST_NAME_STYLE_CLASS = 'testName';
    Test.SUCCESS_STYLE_CLASS = 'passed';
    Test.FAILURE_STYLE_CLASS = 'failure';
    Test.SUCCESS_RESULT_MESSAGE = 'passed';
    Test.FAILURE_RESULT_MESSAGE = 'failure';
    return Test;
}());
exports.Test = Test;
//# sourceMappingURL=Test.js.map