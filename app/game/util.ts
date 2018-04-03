export function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

export class Queue {
    _oldestIndex: number
    _newestIndex: number
    _storage: object

    constructor() {
        this._oldestIndex = 1
        this._newestIndex = 1
        this._storage = {}
    }
    getStorage() {
        return this._storage
    }
    getSize() {
        return this._newestIndex - this._oldestIndex
    }
    enqueue(data) {
        this._storage[this._newestIndex] = data
        this._newestIndex++
    }
    dequeue() {
        const oldestIndex = this._oldestIndex
        const newestIndex = this._newestIndex
        let deletedData

        if (oldestIndex !== newestIndex) {
            deletedData = this._storage[oldestIndex]
            delete this._storage[oldestIndex]
            this._oldestIndex++

            return deletedData
        }
    }
}

export function applyMixins(derivedCtor: any, baseCtors: any[]) {
    console.log('called');
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

export function clamp(max: number, min: number, val: number) {
    return Math.max(min, Math.min(max, val));
}