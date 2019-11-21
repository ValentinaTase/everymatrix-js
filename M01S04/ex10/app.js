let person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: ['html', 'js', 'css', 'java', 'c++', 'node', 'jquery'],
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

console.warn('Folosind obiectul person si forEach, afiseaza skillurile din pozitiile impare ale arrayului.')
person.skills.forEach(function(skill, i) {
  if (i % 2 === 0) {
    console.log(skill);
  }
});

console.warn('In mod similar, afiseaza skillurile care contin litera a.')
person.skills.forEach(function(skill) {
  if (skill.includes('a')) {
    console.log(skill);
  }
});

console.warn('Folosind forEach afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy si xxx yyy."')
let sentence = 'Prietenii mei se numesc '
person.friends.forEach(function(friend, i, friendsArray) {
  sentence += `${friend.name} ${friend.surname}`;

  if (i <= friendsArray.length - 3) {
    sentence += ', '
  }
  if (i === friendsArray.length - 2) {
    sentence += ' si ';
  }
});
console.log(sentence + '.');

console.warn(' Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca au varsta mai mare decat 30 inclusiv.')

console.warn(' Folosind forEach, afiseaza suma anilor de nastere a persoanelor care au varsta impara. ')

console.warn(' Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends daca aceasta este mai mare sau egala cu 2 ani.')

console.warn('Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... "')

console.warn('Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa elementele arrayului skills.')
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse 