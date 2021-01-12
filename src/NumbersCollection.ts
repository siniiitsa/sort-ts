import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(index1: number, index2: number): void {
    const temp = this.data[index1];
    this.data[index1] = this.data[index2];
    this.data[index2] = temp;
  }
}
