export class Event {
    name: string;
    payload: string;
    description: string;

    constructor(name, payload, description) {
        this.name = name;
        this.payload = payload;
        this.description = description;
    }
}
