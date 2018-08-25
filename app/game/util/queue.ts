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
