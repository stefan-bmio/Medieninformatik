import {Test} from "./Test";
import {VerketteterStapel} from "../src/VerketteterStapel";
import {EmptyStackException} from "../src/EmptyStackException";
import {EqString} from "./EqString";
import {AssertionSet} from "./AssertionSet";
import {TestResult} from "./TestResult";

/*
    Various test functions for the stack ADT exercise
 */
(function () {
    let tests: Set<Test> = new Set();

    tests.add(new Test("top of empty stack", (): TestResult => {
        let stack: VerketteterStapel<EqString> = new VerketteterStapel();
        try {
            stack.top();
            return new TestResult(false);
        } catch (exception) {
            return new TestResult(exception instanceof EmptyStackException).withDetail(stack.toString());
        }
    }));

    tests.add(new Test("push/top of stack 1 element", (): TestResult => {
        const EXPECTED = 'Test';
        let stack: VerketteterStapel<EqString> = new VerketteterStapel();
        stack.push(new EqString(EXPECTED));

        let assertions: AssertionSet = new AssertionSet();

        assertions.conjunct("top element", (): boolean => {
            let actual = stack.top();
            return actual.toString() === EXPECTED
        });

        assertions.conjunct('stack empty', (): boolean => {
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

    tests.add(new Test("push/top of stack 5 elements", (): TestResult => {
        const EXPECTED = 'Test 4';
        let stack: VerketteterStapel<EqString> = new VerketteterStapel();
        for (let i = 0; i < 5; i++) {
            stack.push(new EqString("Test " + i));
        }

        let assertions: AssertionSet = new AssertionSet();

        assertions.conjunct("top element", (): boolean => {
            let actual = stack.top();
            return actual.toString() === EXPECTED
        });

        assertions.conjunct('stack empty', (): boolean => {
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

    tests.add(new Test("pop from empty stack", (): TestResult => {
        let stack: VerketteterStapel<EqString> = new VerketteterStapel();
        try {
            stack.pop();
            return new TestResult(false);
        }
        catch (exception) {
            return new TestResult(exception instanceof EmptyStackException).withDetail(stack.toString());
        }
    }));

    tests.add(new Test("push/pop from stack 1 element", (): TestResult => {
        const EXPECTED = 'Test';
        let stack: VerketteterStapel<EqString> = new VerketteterStapel();
        stack.push(new EqString(EXPECTED));
        let stackStr: string = stack.toString();

        let assertions: AssertionSet = new AssertionSet();

        assertions.conjunct("top element", (): boolean => {
            let actual = stack.pop();
            return actual.toString() === EXPECTED
        });

        assertions.conjunct('stack empty', (): boolean => {
            try {
                stack.pop();
                return false;
            }
            catch (exception) {
                return exception instanceof EmptyStackException;
            }
        });

        return assertions.toTestResult().withDetail(stackStr);
    }));

    tests.add(new Test("push/pop from stack 6 elements", (): TestResult => {
        const EXPECTED = 'Test %n';
        let stack: VerketteterStapel<EqString> = new VerketteterStapel();
        for (let i = 0; i < 6; i++) {
            stack.push(new EqString("Test " + i));
        }
        let stackStr: string = stack.toString();

        let assertionSet: AssertionSet = new AssertionSet();
        for (let i: number = 5; i >= 0; i--) {
            assertionSet.conjunct('pop stack element ' + i, (): boolean => {
                try {
                    let actual = stack.pop();
                    return actual.toString() === EXPECTED.replace(/%n/, '' + i);
                }
                catch (exception) {
                    return false;
                }
            });
        }

        assertionSet.conjunct('stack empty', (): boolean => {
            try {
                stack.pop();
                return false;
            }
            catch (exception) {
                return exception instanceof EmptyStackException;
            }
        });

        return assertionSet.toTestResult().withDetail(stackStr);
    }));

    tests.add(new Test('empty stacks equal', (): TestResult => {
        let stack0: VerketteterStapel<any> = new VerketteterStapel();
        let stack1: VerketteterStapel<any> = new VerketteterStapel();

        return new TestResult(stack0.equals(stack1));
    }));

    tests.add(new Test('empty stack not equal to not empty stack', (): TestResult => {
        let assertions: AssertionSet = new AssertionSet();

        let stack0: VerketteterStapel<any> = new VerketteterStapel();
        let stack1: VerketteterStapel<any> = new VerketteterStapel();
        stack1.push('Test');
        assertions.conjunct('left stack empty', (): boolean => !stack0.equals(stack1));

        let stack2: VerketteterStapel<any> = new VerketteterStapel();
        let stack3: VerketteterStapel<any> = new VerketteterStapel();
        stack3.push('Test');
        assertions.conjunct('right stack empty', (): boolean => !stack2.equals(stack3));

        return assertions.toTestResult();
    }));

    tests.add(new Test('stacks equal 1 element', (): TestResult => {
        let stack0: VerketteterStapel<EqString> = new VerketteterStapel();
        let stack1: VerketteterStapel<EqString> = new VerketteterStapel();

        stack0.push(new EqString('Test'));
        stack1.push(new EqString('Test'));

        return new TestResult(stack0.equals(stack1));
    }));

    tests.add(new Test('stacks not equal 1 element', (): TestResult => {
        let stack0: VerketteterStapel<EqString> = new VerketteterStapel();
        let stack1: VerketteterStapel<EqString> = new VerketteterStapel();

        stack0.push(new EqString('Test 0'));
        stack1.push(new EqString('Test 1'));

        return new TestResult(!stack0.equals(stack1));
    }));

    tests.add(new Test('stacks equal 10 elements', (): TestResult => {
        let stack0: VerketteterStapel<EqString> = new VerketteterStapel();
        let stack1: VerketteterStapel<EqString> = new VerketteterStapel();

        for(let i: number = 0; i < 10; i++){
            let value: EqString = new EqString('' + i);
            stack0.push(value);
            stack1.push(value);
        }

        return new TestResult(stack0.equals(stack1));
    }));

    tests.add(new Test('stacks not equal different size', (): TestResult => {
        let assertions: AssertionSet = new AssertionSet();

        let stack0: VerketteterStapel<EqString> = new VerketteterStapel();
        let stack1: VerketteterStapel<EqString> = new VerketteterStapel();

        for(let i: number = 0; i < 10; i++){
            let value: EqString = new EqString('' + i);
            stack0.push(value);
            stack1.push(value);
        }

        stack1.push(new EqString('Test'));

        assertions.conjunct('left stack less elements', (): boolean => !stack0.equals(stack1));

        let stack2: VerketteterStapel<EqString> = new VerketteterStapel();
        let stack3: VerketteterStapel<EqString> = new VerketteterStapel();

        for(let i: number = 0; i < 10; i++){
            let value: EqString = new EqString('' + i);
            stack2.push(value);
            stack3.push(value);
        }

        stack2.push(new EqString('Test'));

        assertions.conjunct('right stack less elements', (): boolean => !stack0.equals(stack1));

        return assertions.toTestResult();
    }));

    tests.forEach(test => {
        test.run();
    });
})();