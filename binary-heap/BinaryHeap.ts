export class BinaryHeap<T> {

    private _values: T[];
    public get values(): T[] {
        return this._values;
    }
    public set values(vals: T[]) {
        this._values = vals;
    }

    public constructor() {
        this._values = [];
    }

    public insert(value: T): boolean {
        this.values.push(value);
        if(this.values.length < 1) {
            return true;
        }
        return this.bubbleUp();
    }

    private bubbleUp(): boolean {
        let newValNdx = this.values.length - 1;
        let value = this.values[newValNdx];
        let parentNdx = this.getParentNdx(newValNdx);
        while(parentNdx >= 0 && value > this.values[parentNdx]){
            this.values[newValNdx] = this.values[parentNdx];
            this.values[parentNdx] = value;
            newValNdx = parentNdx;
            parentNdx = this.getParentNdx(newValNdx);
        }
        return true;
    }

    public extractMax(): number {
        return 0;
    }

    // this.values[parentNdx] NDx: ( n - 1) / 2
    private getParentNdx(value: number) { return Math.floor((value - 1) / 2)  }

}