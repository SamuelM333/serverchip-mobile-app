export class Task {

    name: string;
    description: string;
    microchip: {
        name: string;
        ip: string;
    };
    output_port: {
        number: number;
        state: boolean;
    };
    conditions: { // Create class?
        name: string;
        datetime: string;
        input_port: {
            number: number;
            state: boolean;
        }
    }[];

    constructor(name: string, description: string, microchip: { name: string; ip: string }, output_port: { number: number; state: boolean }, conditions: { name: string; datetime: string; input_port: { number: number; state: boolean } }[]) {
        this.name = name;
        this.description = description;
        this.microchip = microchip;
        this.output_port = output_port;
        this.conditions = conditions;
    }


}