export class Test {
    private auxiliary: string;
    private result: string;

    constructor(private name: string, private testFn: () => boolean) {
        this.auxiliary = "";
    }

    public test(): void {
        let isPass: boolean = this.testFn();

        // let log: string = this.name;
        // if (this.auxiliary !== null) {
        //     log += " (" + this.auxiliary + ")";
        // }
        // log += ": %c" + (isPass ? "passed" : "failure");
        //
        // console.log(log, "color: " + (isPass ? "green" : "red"));
        const black: string = "color: black;";
        const green: string = "color: green;";
        const red: string = "color: red";
        if(isPass){
            console.groupCollapsed("%cpassed: %c" + this.name, green, black);
        }else{
            console.group("%cfailed: %c" + this.name, red, black);
        }
        console.table({"name": this.name, "auxiliary": this.auxiliary})
        console.groupEnd();
    }

    public getName(): string {
        return this.name;
    }

    protected auxiliaryLog(auxiliary: string) {
        this.auxiliary = auxiliary;
    }
}