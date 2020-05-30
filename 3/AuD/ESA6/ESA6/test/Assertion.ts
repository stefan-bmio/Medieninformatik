/*
    Represents a number of results from unit tests
 */
import {TestResult} from "./TestResult";

export class Assertion {
    private static readonly ALL_PASSED: string = '%n assertion{s}';
    private static readonly FAILURES: string = 'Failed assertions: ';

    private results: Map<string, boolean>;
    private allSuccess: boolean;
    private details: string[];

    public static that(name: string, condition: boolean, detail?: string): Assertion {
        let assertion: Assertion = new Assertion();
        assertion.and(name, condition);
        if (detail) {
            assertion.details.push(detail);
        }
        return assertion;
    }

    private constructor() {
        this.results = new Map();
        this.allSuccess = true;
        this.details = [];
    }

    public and(assertionName: string, condition: boolean, detail?: string): Assertion {
        this.allSuccess = this.allSuccess && condition;
        this.results.set(assertionName, condition);
        if (detail) {
            this.details.push(detail);
        }
        return this;
    }

    private toString(): string {
        if (this.allSuccess) {
            return Assertion.ALL_PASSED
                .replace(/%n/, '' + this.results.size)
                .replace(/{s}/, this.results.size > 1 ? 's' : '');
        }

        return Assertion.FAILURES +
            Array.from(this.results)
            .filter(kv => kv[1] === false)
            .map(kv => kv[0]).join(', ');
    }

    public toTestResult(): TestResult {
        return new TestResult(this.allSuccess, this.toString(), this.details.join(', '));
    }
}