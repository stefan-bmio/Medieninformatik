"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Test_1 = require("./Test");
var VerketteterStapel_1 = require("../src/VerketteterStapel");
var EmptyStackException_1 = require("../src/EmptyStackException");
var EqString_1 = require("./EqString");
var AssertionSet_1 = require("./AssertionSet");
var TestResult_1 = require("./TestResult");
/*
    Various test functions for the stack ADT exercise
 */
(function () {
    var tests = new Set();
    tests.add(new Test_1.Test("top of empty stack", function () {
        var stack = new VerketteterStapel_1.VerketteterStapel();
        try {
            stack.top();
            return new TestResult_1.TestResult(false);
        }
        catch (exception) {
            return new TestResult_1.TestResult(exception instanceof EmptyStackException_1.EmptyStackException).withDetail(stack.toString());
        }
    }));
    tests.add(new Test_1.Test("push/top of stack 1 element", function () {
        var EXPECTED = 'Test';
        var stack = new VerketteterStapel_1.VerketteterStapel();
        stack.push(new EqString_1.EqString(EXPECTED));
        var assertions = new AssertionSet_1.AssertionSet();
        assertions.conjunct("top element", function () {
            var actual = stack.top();
            return actual.toString() === EXPECTED;
        });
        assertions.conjunct('stack empty', function () {
            try {
                stack.top();
                return true;
            }
            catch (exception) {
                return false;
            }
        });
        return assertions.toTestResult().withDetail(stack.toString());
    }));
    tests.add(new Test_1.Test("push/top of stack 5 elements", function () {
        var EXPECTED = 'Test 4';
        var stack = new VerketteterStapel_1.VerketteterStapel();
        for (var i = 0; i < 5; i++) {
            stack.push(new EqString_1.EqString("Test " + i));
        }
        var assertions = new AssertionSet_1.AssertionSet();
        assertions.conjunct("top element", function () {
            var actual = stack.top();
            return actual.toString() === EXPECTED;
        });
        assertions.conjunct('stack empty', function () {
            try {
                stack.top();
                return true;
            }
            catch (exception) {
                return false;
            }
        });
        return assertions.toTestResult().withDetail(stack.toString());
    }));
    tests.add(new Test_1.Test("pop from empty stack", function () {
        var stack = new VerketteterStapel_1.VerketteterStapel();
        try {
            stack.pop();
            return new TestResult_1.TestResult(false);
        }
        catch (exception) {
            return new TestResult_1.TestResult(exception instanceof EmptyStackException_1.EmptyStackException).withDetail(stack.toString());
        }
    }));
    tests.add(new Test_1.Test("push/pop from stack 1 element", function () {
        var EXPECTED = 'Test';
        var stack = new VerketteterStapel_1.VerketteterStapel();
        stack.push(new EqString_1.EqString(EXPECTED));
        var stackStr = stack.toString();
        var assertions = new AssertionSet_1.AssertionSet();
        assertions.conjunct("top element", function () {
            var actual = stack.pop();
            return actual.toString() === EXPECTED;
        });
        assertions.conjunct('stack empty', function () {
            try {
                stack.pop();
                return false;
            }
            catch (exception) {
                return exception instanceof EmptyStackException_1.EmptyStackException;
            }
        });
        return assertions.toTestResult().withDetail(stackStr);
    }));
    tests.add(new Test_1.Test("push/pop from stack 6 elements", function () {
        var EXPECTED = 'Test %n';
        var stack = new VerketteterStapel_1.VerketteterStapel();
        for (var i = 0; i < 6; i++) {
            stack.push(new EqString_1.EqString("Test " + i));
        }
        var stackStr = stack.toString();
        var assertionSet = new AssertionSet_1.AssertionSet();
        var _loop_1 = function (i) {
            assertionSet.conjunct('pop stack element ' + i, function () {
                try {
                    var actual = stack.pop();
                    return actual.toString() === EXPECTED.replace(/%n/, '' + i);
                }
                catch (exception) {
                    return false;
                }
            });
        };
        for (var i = 5; i >= 0; i--) {
            _loop_1(i);
        }
        assertionSet.conjunct('stack empty', function () {
            try {
                stack.pop();
                return false;
            }
            catch (exception) {
                return exception instanceof EmptyStackException_1.EmptyStackException;
            }
        });
        return assertionSet.toTestResult().withDetail(stackStr);
    }));
    tests.add(new Test_1.Test('empty stacks equal', function () {
        var stack0 = new VerketteterStapel_1.VerketteterStapel();
        var stack1 = new VerketteterStapel_1.VerketteterStapel();
        return new TestResult_1.TestResult(stack0.equals(stack1));
    }));
    tests.add(new Test_1.Test('empty stack not equal to not empty stack', function () {
        var assertions = new AssertionSet_1.AssertionSet();
        var stack0 = new VerketteterStapel_1.VerketteterStapel();
        var stack1 = new VerketteterStapel_1.VerketteterStapel();
        stack1.push('Test');
        assertions.conjunct('left stack empty', function () { return !stack0.equals(stack1); });
        var stack2 = new VerketteterStapel_1.VerketteterStapel();
        var stack3 = new VerketteterStapel_1.VerketteterStapel();
        stack3.push('Test');
        assertions.conjunct('right stack empty', function () { return !stack2.equals(stack3); });
        return assertions.toTestResult();
    }));
    tests.add(new Test_1.Test('stacks equal 1 element', function () {
        var stack0 = new VerketteterStapel_1.VerketteterStapel();
        var stack1 = new VerketteterStapel_1.VerketteterStapel();
        stack0.push(new EqString_1.EqString('Test'));
        stack1.push(new EqString_1.EqString('Test'));
        return new TestResult_1.TestResult(stack0.equals(stack1));
    }));
    tests.add(new Test_1.Test('stacks not equal 1 element', function () {
        var stack0 = new VerketteterStapel_1.VerketteterStapel();
        var stack1 = new VerketteterStapel_1.VerketteterStapel();
        stack0.push(new EqString_1.EqString('Test 0'));
        stack1.push(new EqString_1.EqString('Test 1'));
        return new TestResult_1.TestResult(!stack0.equals(stack1));
    }));
    tests.add(new Test_1.Test('stacks equal 10 elements', function () {
        var stack0 = new VerketteterStapel_1.VerketteterStapel();
        var stack1 = new VerketteterStapel_1.VerketteterStapel();
        for (var i = 0; i < 10; i++) {
            var value = new EqString_1.EqString('' + i);
            stack0.push(value);
            stack1.push(value);
        }
        return new TestResult_1.TestResult(stack0.equals(stack1));
    }));
    tests.add(new Test_1.Test('stacks not equal different size', function () {
        var assertions = new AssertionSet_1.AssertionSet();
        var stack0 = new VerketteterStapel_1.VerketteterStapel();
        var stack1 = new VerketteterStapel_1.VerketteterStapel();
        for (var i = 0; i < 10; i++) {
            var value = new EqString_1.EqString('' + i);
            stack0.push(value);
            stack1.push(value);
        }
        stack1.push(new EqString_1.EqString('Test'));
        assertions.conjunct('left stack less elements', function () { return !stack0.equals(stack1); });
        var stack2 = new VerketteterStapel_1.VerketteterStapel();
        var stack3 = new VerketteterStapel_1.VerketteterStapel();
        for (var i = 0; i < 10; i++) {
            var value = new EqString_1.EqString('' + i);
            stack2.push(value);
            stack3.push(value);
        }
        stack2.push(new EqString_1.EqString('Test'));
        assertions.conjunct('right stack less elements', function () { return !stack0.equals(stack1); });
        return assertions.toTestResult();
    }));
    tests.forEach(function (test) {
        test.run();
    });
})();
//# sourceMappingURL=VerketteterStapelTest.js.map