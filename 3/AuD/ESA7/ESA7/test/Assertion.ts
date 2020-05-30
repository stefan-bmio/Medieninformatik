/*
    Represents a number of results from unit tests
 */
import {TestResult} from "./TestResult";

export class Assertion {
    private static readonly ALL_PASSED: string = '%n assertion{s}';
    private static readonly FAILURES: string = '%n failed assertion{s}: ';

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
            return this.formatCount(Assertion.ALL_PASSED);
        }

        let failures = Array.from(this.results).filter(kv => kv[1] === false);
        return failures.length + '/' + this.formatCount(Assertion.FAILURES) +
            failures.map(kv => kv[0]).join(', ');
    }

    private formatCount(message: string, count?: number): string {
        if (count !== undefined) {
            message = count + '/' + message;
        }
        return message.replace(/%n/, '' + this.results.size)
            .replace(/{s}/, this.results.size > 1 ? 's' : '');
    }

    public toTestResult(): TestResult {
        return new TestResult(this.allSuccess, this.toString(), this.details.join(', '));
    }
}