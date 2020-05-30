/*
    Represents a result from a unit test
 */

export class TestResult {
    constructor(private _success: boolean, private _message?: string, private _detail?: string) {
    }

    public withDetail(detail: string): TestResult {
        this._detail = detail;
        return this;
    }

    get success(): boolean {
        return this._success;
    }

    get message(): string {
        return (this._message === undefined || this._message === null) ? '' : this._message;
    }

    get detail(): string {
        return (this._detail === undefined || this._detail === null) ? '' : this._detail;
    }
}