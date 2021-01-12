import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, -3, 5, 0]);
const numbersSorter = new Sorter(numbersCollection);

const charactersCollection = new CharactersCollection('Xabay');
const charactersSorter = new Sorter(charactersCollection);

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(-1);
linkedList.add(3);
linkedList.add(0);
const linkedListSorter = new Sorter(linkedList);

numbersSorter.sort();
charactersSorter.sort();
linkedListSorter.sort();

console.log(numbersSorter.collection);
console.log(charactersSorter.collection);
linkedList.print();
