/*
    Represents a number of results from unit tests
 */
import {TestResult} from "./TestResult";

export class AssertionSet {
    private static readonly ALL_PASSED: string = '%n assertions';
    private static readonly FAILURES: string = 'Failed assertions: ';

    private results: Map<string, boolean>;
    private allSuccess: boolean;

    constructor() {
        this.results = new Map();
        this.allSuccess = true;
    }

    public conjunct(assertionName: string, fn: () => boolean) {
        let isSuccess: boolean = fn();
        this.allSuccess = this.allSuccess && isSuccess;
        this.results.set(assertionName, isSuccess);
    }

    public toString(): string {
        if (this.allSuccess) {
            return AssertionSet.ALL_PASSED.replace(/%n/, '' + this.results.size);
        }

        let result: string = AssertionSet.FAILURES;
        this.results.forEach((value, key) => {
            if (!value) {
                result += key + ' ';
            }
        });

        return result;
    }

    public toTestResult(): TestResult {
        return new TestResult(this.allSuccess, this.toString());
    }
}