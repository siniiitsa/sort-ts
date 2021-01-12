import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([10, -3, 5, 0]);
const numbersSorter = new Sorter(numbersCollection);

const charactersCollection = new CharactersCollection('Xabay');
const charactersSorter = new Sorter(charactersCollection);

numbersSorter.sort();
charactersSorter.sort();

console.log(numbersSorter.collection);
console.log(charactersSorter.collection);
