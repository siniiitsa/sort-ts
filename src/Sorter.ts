import { NumbersCollection } from './NumbersCollection';

export interface Sortable {
  length: number;
  compare(index1: number, index2: number): boolean;
  swap(index1: number, index2: number): void;
}

export abstract class Sorter {
  abstract length: number;
  abstract compare(index1: number, index2: number): boolean;
  abstract swap(index1: number, index2: number): void;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
