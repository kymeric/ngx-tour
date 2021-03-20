export class Property {
    name: string;
    prop_type: string;
    default_value: string;
    description: string;
    anchor: string;
    del: boolean

    constructor(name, prop_type, default_value, description, anchor = null, del = false) {
        this.name = name;
        this.prop_type = prop_type;
        this.default_value = default_value;
        this.description = description;
        this.anchor = anchor;
        this.del = del;
    }
}
