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

let totalAge = 0;
person.friends.forEach(function(friend, i, friendsArray) {

  if (person.friends[i].age >= 30) {
    totalAge += person.friends[i].age;
  }
});
console.log(totalAge);

console.warn(' Folosind forEach, afiseaza suma anilor de nastere a persoanelor care au varsta impara. ')

let birthYearSum = 0;
person.friends.forEach(function(friend, i, friendsArray) {
  let birthYear = 2019 - person.friends[i].age;
  birthYearSum += birthYear;
  if (i % 2 === 0) {
  console.log(birthYearSum);
}
}); 
// NOT GOOD

console.warn(' Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends daca aceasta este mai mare sau egala cu 2 ani.')

person.friends.forEach(function(friend, i, friendsArray) {
  let ageDifference = person.age - person.friends[i].age;
  if (ageDifference > 2) {
    console.log(`Diferenta dintre ${person.name} si ${person.friends[i].name} este de ${ageDifference} ani.`);
  }
}); 

console.warn('Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... "')

person.friends.forEach(function(friend, i, friendsArray) {
  let ageDifference =  person.age - person.friends[i].age;
    console.log(`Diferenta dintre ${person.name} si ${person.friends[i].name} este de ${ageDifference} ani.`);
  }
,); 
console.warn('Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa elementele arrayului skills.')
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse 

console.warn(' Folosind forEach, afiseaza suma anilor de nastere a persoanelor ');
let sum = 0;
person.friends.forEach(function(friend)) {
sum += (new Date()).getFullYear() - friend.age;

});
console.log(sum);

console.warn('Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.');
person.friends.forEach(function(friend) {
  let dif = person.age - friend.age;
  console.log(`Diferenta este ${dif}`);
});

console.warn('Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa numele complet al prietenilor din arrayul friends.');
person.friends.reverse().forEach(function(friend) {
  console.log(`${friend.name} ${friend.surname}`);
});



person.skills.forEach(function(skill, i) {
  if (i % 2 === 0) {
    console.log(skill);
  }
})

console.warn('***********');

person.skills.forEach(function(skill){
  if(skill.includes('a')) {
    console.log(skill);
  }
});

console.warn('****************');
let sentence = 'Prietenii mei se numesc ';
person.friends.forEach(function(friend, i, friendsArray) {
  sentence += `${friend.name} ${friend.surname}`;
  if (i <= friendsArray.length -3) {
    sentence += ', '
  }
  if (i === friendsArray.length - 2) {
    sentence +=' si '
  }
});
console.log(sentence);

console.warn('********************');
let ageSum=0;
person.friends.forEach(function(varsta) {
  console.log(ageSum);
  if(varsta.age >= 30)
    ageSum = ageSum + varsta.age;
}
);

console.warn('********************');
let ageSum2=0;
person.friends.forEach(function(varsta) {
  if(varsta.age % 2 !== 0)
    ageSum2 = ageSum2 + varsta.age;
    
}
);
console.log(ageSum2);

console.warn('********************');
let ageDif=0;
let personAge=person.age;
person.friends.forEach(function(varsta){
  if(personAge - varsta.age >= 2) {
    ageDif = personAge - varsta.age;
    console.log(ageDif);
  }
});

console.warn('*****************');


person.friends.forEach(function(varsta){
  if(personAge - varsta.age >= 2) {
    ageDif = personAge - varsta.age;
    let ageSentence=`Intre ${person.name} si ${varsta.name} este o diferenta de varsta de ${ageDif} ani`;
    console.log(ageSentence);
  }
});

console.warn('*****************');

// skillsrev=[]
// person.skills.forEach(function (skill){

//   skillsrev.push(skill);
//   skillsreversed=skillsrev.reverse();

// });
// console.log(skillsrev);
// console.log(skillsreversed);
const skillsrev = person.skills;
const skillsreversed = skillsrev.reverse();
skillsreversed.forEach(function(skillss) {
  console.log(skillss);
})
// much more simple --->
var skills1 = person.skills;
var skills2 = skills1.reverse();


console.warn('*****************');

person.skills.forEach(function(skill){
  console.log(skill);
}); 

console.warn('*****************');

person.skills.forEach(function(skill){
  if (!skill.startsWith('j')){
    console.log(skill);
  };
}); 

console.warn('*****************');
let sentenceNume=`Numele de familie ale prietenilor mei sunt `
person.friends.forEach(function(nume,i) {
    if (i < 2) {
      sentenceNume +=`${nume.surname}, `;
    } else {
      sentenceNume +=`${nume.surname}. `;
    }
    
    console.log(sentenceNume);
});

console.warn('*****************');
let varsta=0;
person.friends.forEach(function(prieten){
  varsta=varsta+prieten.age;
  
})
console.log(varsta);

console.warn('*****************');
const names=person.friends;
const namesReverse=names.reverse();

namesReverse.forEach(function(friendName) {
  let numele =friendName.name+' '+ friendName.surname;
  console.log(numele);
})