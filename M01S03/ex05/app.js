var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: ['html', 'javascript', 'css'],
  friends: [{
   name: 'Larry',
   surname: 'Larryson',
   age: 30
  }, {
    name: 'Stevenson',
    surname: 'Stevenson',
    age: 31
  }, {
    name: 'Carol',
    surname: 'Carolson',
    age: 29
  }]  
};

console.log(person.friends);
console.log(
'Ma numesc ' + person.name + ' ' + person.surname +
' si stiu ' + person.skills[0] + ' si ' + person.skills[2] + '.'
);
console.log(`Sunt ${person.name} si acum invat JavaScript.`);
console.log(`Am ${person.friends.length} prieteni: ${person.friends[0].name}, ${person.friends[1].name} si ${person.friends[2].name}. `);
console.log(`Ma numesc ${person.name} si vreau sa invat ${person.skills[1]}.`);
console.log(`Am ${person.friends.length} prieteni: ${person.friends[0].surname}, ${person.friends[1].surname} si ${person.friends[2].surname}. `);
console.log(`Numele meu este ${person.name} ${person.surname}, am ${person.age} de ani si ${person.friends.length} prieteni.`);
// Afiseaza propozitia: “Ma numesc xxx yyy si stiu html si css.” Foloseste notatia cu paranteze patrate
// // Afiseaza propozitia “Sunt xxx si acum invat JavaScript.” Nu folosi valoarea din arrayul de skills.
// Afiseaza propozitia “Am x prieteni: Larry, Steve si Carol.” Foloseste proprietatea length si apeleaza direct proprietatile name ale obiectelor.
//Afiseaza propozitia: “Ma numesc xxx yyy si vreau sa invat javascript.” Foloseste notatia cu paranteze patrate.
//Afiseaza propozitia “Sunt xxx si stiu HTML si CSS.”. Nu folosi valoarea din arrayul de skills.
//Afiseaza propozitia “Am x prieteni: Larryson, Stevenson si Carolson.”. Foloseste proprietatea length si apeleaza direct proprietatile name ale obiectelor.
//Afiseaza propozitia “Numele meu este xxx yyy, am zz ani si n prieteni.”. Foloseste metoda length pentru a calcula lungimea arrayului de prieteni.

