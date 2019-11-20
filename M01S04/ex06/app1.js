var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: ['html', 'javascript', 'css', 'java', 'c++', 'node', 'jquery'],
  friends: [{
    name: 'Larry',
    surname: 'Larryson',
    age: 30 
  }, {
    name: 'Steven',
    surname: 'Stevenson',
    age: 31
  }, {
    name: 'Carol',
    surname: 'Carolson',
    age: 29
  }]
};

console.warn('Folosind obiectul person si un for, afiseaza in consola skillurile pe care le are persoana ');

for (let i = 0; i < person.skills.length; i++) {
  if (i % 2 === 0) {
    console.log(person.skills[i]);
  }
}

console.warn('In mod similar, afiseaza skillurile care incep cu c');
for (let i = 0; i < person.skills.length; i++) {
    if (person.skills[i].startsWith('c')) {
      console.log(person.skills[i]);
  }
}

console.warn(' Folosind un for afiseaza propozitia: "Numele de familie ale prietenilor mei sunt xxx, xxx , xxx."');
let sentence = 'Numele de familie ale prietenilor mei sunt ';
for (let i = 0; i < person.friends.length; i++) {
  sentence += `${person.friends[i].surname}`;
  if (i < person.friends.length - 1) {
    sentence += ', ';
  } else {
    sentence += '.';
  }
}
console.log(sentence);

console.warn(' Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends ');
let totalAge = 0;
for (let i = 0; i < person.friends.length; i++) {

  if (totalAge += person.friends[i].age) {
  }
}
console.log(totalAge);

console.warn(' Folosind un for, afiseaza suma anilor  persoanelor. ');
let birthYearSum = 0;
for (let i = 0; i < person.friends.length; i++) {
  let birthYear = 2019 - person.friends[i].age;
  birthYearSum += birthYear;
}
console.log(birthYearSum);

console.warn(' Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends. ');
for (let i = 0; i < person.friends.length; i++) {
  let ageDifference = person.age - person.friends[i].age;
    console.log(`Diferenta dintre ${person.name} si ${person.friends[i].name} este de ${ageDifference} ani.`);
}

console.warn(' Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ". Repeta pentru tot arrayul friends.');
for (let i = 0; i < person.friends.length; i++) {
  let ageDifference =  person.age - person.friends[i].age;
    console.log(`Diferenta dintre ${person.name} si ${person.friends[i].name} este ${ageDifference}.`);
  }
