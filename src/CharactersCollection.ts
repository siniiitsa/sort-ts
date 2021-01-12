import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(index1: number, index2: number): boolean {
    return (
      this.data[index1].toLocaleLowerCase() > this.data[index2].toLowerCase()
    );
  }

  swap(index1: number, index2: number): void {
    const characters = this.data.split('');

    const temp = characters[index1];
    characters[index1] = characters[index2];
    characters[index2] = temp;

    this.data = characters.join('');
  }
}
