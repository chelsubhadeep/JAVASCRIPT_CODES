import { Animal,Cat } from './animal.js';

/*
let cat = new Animal('Cat', 4);
cat.legs = 3;

cat.makeNoise('Meow');
console.log(cat.type);
console.log(cat.legs);
console.log(cat.metaData);

*/ 
let cat = new Cat('Cat', 4);
cat.makeNoise();
console.log(cat.metaData)