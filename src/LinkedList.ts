class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList {
  head: Node | null = null;

  get length(): number {
    if (!this.head) return 0;

    let length = 1;
    let tail = this.head;
    while (tail.next) {
      length++;
      tail = tail.next;
    }

    return length;
  }

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  at(index: number): Node {
    if (!this.head) throw new Error('Index is out of bounds!');

    let count = 0;
    let node: Node | null = this.head;
    while (node) {
      if (count === index) return node;
      count++;
      node = node.next;
    }

    throw new Error('Index is out of bounds!');
  }

  compare(index1: number, index2: number): boolean {
    if (!this.head) throw new Error('List is empty!');

    return this.at(index1).data > this.at(index2).data;
  }

  swap(index1: number, index2: number): void {
    const temp = this.at(index1).data;
    this.at(index1).data = this.at(index2).data;
    this.at(index2).data = temp;
  }

  print(): void {
    if (!this.head) return;

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
