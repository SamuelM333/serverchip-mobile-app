export abstract class Condition {

    name: string;
    conditionType: string;

    constructor(name: string, type: string) {
        this.name = name;
        this.conditionType = type;
    }
}

export class DayHourCondition extends Condition {
    day_hour: {
        day: string,
        hour: {
            start: string,
            end: string
        };
    };

    constructor(name: string, conditionType: string, day_hour: { day: string; hour: { start: string, end: string } }) {
        super(name, conditionType);
        this.day_hour = day_hour;
    }
}

export class InputPortCondition extends Condition {
    input_port: {
        number: number;
        state: boolean;
    };

    constructor(name: string, conditionType: string, input_port: { number: number; state: boolean }) {
        super(name, conditionType);
        this.input_port = input_port;
    }
}
