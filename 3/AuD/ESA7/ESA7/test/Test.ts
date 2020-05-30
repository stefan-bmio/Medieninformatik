/*
    Represents a unit test
 */
import {TestResult} from "./TestResult";
import {Assertion} from "./Assertion";

export class Test {
    private static readonly FAILURE_CONSOLE_CONTAINER_STYLE_CLASS: string = 'hasFailures';

    private static readonly CONSOLE_CELL_STYLE_CLASS: string = "consoleCell";
    private static readonly TEST_NAME_STYLE_CLASS: string = 'testName';

    private static readonly SUCCESS_STYLE_CLASS: string = 'passed';
    private static readonly FAILURE_STYLE_CLASS: string = 'failure';
    private static readonly SUCCESS_RESULT_MESSAGE: string = 'passed';
    private static readonly FAILURE_RESULT_MESSAGE: string = 'failure';

    constructor(private name: string, private fn: () => Assertion) {

    }

    public run(): void {
        let testResult: TestResult = this.fn().toTestResult();
        this.updateConsole(testResult.success, testResult.message, testResult.detail);
    }

    private updateConsole(isSuccess: boolean, message: string, detail: string): void {
        let container: HTMLDivElement = <HTMLDivElement> document.getElementById('consoleContainer');
        if(!isSuccess){
            container.classList.add(Test.FAILURE_CONSOLE_CONTAINER_STYLE_CLASS)
        }

        let table: HTMLTableElement = <HTMLTableElement> document.getElementById('console');
        let row: HTMLTableRowElement = table.insertRow();
        let nameCell: HTMLTableCellElement = row.insertCell();
        let resultCell: HTMLTableCellElement = row.insertCell();
        let messageCell: HTMLTableCellElement = row.insertCell();
        let detailCell: HTMLTableCellElement = row.insertCell();

        nameCell.classList.add(Test.CONSOLE_CELL_STYLE_CLASS, Test.TEST_NAME_STYLE_CLASS);
        nameCell.innerHTML = this.name;

        resultCell.classList.add(Test.CONSOLE_CELL_STYLE_CLASS);

        if (isSuccess) {
            resultCell.classList.add(Test.SUCCESS_STYLE_CLASS);
            resultCell.innerHTML = Test.SUCCESS_RESULT_MESSAGE;
        } else {
            resultCell.classList.add(Test.FAILURE_STYLE_CLASS);
            resultCell.innerHTML = Test.FAILURE_RESULT_MESSAGE;
        }

        messageCell.classList.add(Test.CONSOLE_CELL_STYLE_CLASS);
        messageCell.innerHTML = message;

        detailCell.classList.add(Test.CONSOLE_CELL_STYLE_CLASS);
        detailCell.innerHTML = detail;
    }
}