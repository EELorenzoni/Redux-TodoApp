export class Todo {
    id: number;
    text: string;
    completed: boolean;

    constructor(text: string) {
        this.text = text.charAt(0).toUpperCase() + text.slice(1);
        this.completed = false;
        this.id = Math.random();
    }
}
