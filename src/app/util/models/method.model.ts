export class Method {
    key: string;
    definition: string;
    return_type: string;
    description: string;

    constructor(key, definition, return_type, description) {
        this.key = key;
        this.definition = definition;
        this.return_type = return_type;
        this.description = description;
    }
}
