/*
    Exception that is thrown when trying to retrieve elements from an empty stack
 */
export class EmptyStackException {
    private message: string;

    public constructor(message: string) {
        this.message = this.constructor.name + ': ' + message;
    }

    public getMessage(): string {
        return this.message;
    }
}