export function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
}

export class Queue {
    public oldestIndex: number;
    public newestIndex: number;
    public storage: object;

    constructor() {
        this.oldestIndex = 1;
        this.newestIndex = 1;
        this.storage = {};
    }
    public getStorage() {
        return this.storage;
    }
    public getSize() {
        return this.newestIndex - this.oldestIndex;
    }
    public enqueue(data) {
        this.storage[this.newestIndex] = data;
        this.newestIndex++;
    }
    public dequeue() {
        const oldestIndex = this.oldestIndex;
        const newestIndex = this.newestIndex;
        let deletedData;

        if (oldestIndex !== newestIndex) {
            deletedData = this.storage[oldestIndex];
            delete this.storage[oldestIndex];
            this.oldestIndex++;

            return deletedData;
        }
    }
}

// export function applyMixins(derivedCtor: any, baseCtors: any[]) {
//     baseCtors.forEach(baseCtor => {
//         Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
//             derivedCtor.prototype[name] = baseCtor.prototype[name];
//         });
//     });
// }

export function clamp(max: number, min: number, val: number) {
    return Math.max(min, Math.min(max, val));
}

export interface IUnitVector {
    x: UnitVectorValue;
    y: UnitVectorValue;
}

export enum UnitVectorValue {
    Position = 1,
    Negative = -1,
    Zero = 0,
}
