export class Map<T> {
    private items: { [key: number]: T };

    constructor() {
        this.items = {};
    }

    add(key: number, value: T): void {
        this.items[key] = value;
    }

    has(key: number): boolean {
        return key in this.items;
    }

    get(key: number): T {
        return this.items[key];
    }
}
