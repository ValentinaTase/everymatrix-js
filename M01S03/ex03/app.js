var dragos = {
  name: 'Dragos',
  surname: 'Iordache',
  friends: {}  
};

var larry = {
  name: 'Larry',
  surname: 'Larryson',
  friends: {}
};

var carol = {
  name: 'Carol',
  surname: 'Carolson',
  friends: {}
};

var steven = {
  name: 'Steven',
  surname: 'Stevenson',
  friends: {}
};

var anita = {
  name: 'Andra',
  surname: 'Andrason',
  friends: {}
};

dragos.friends.larry = larry;
dragos.friends.steven = steven;
dragos.friends.anita = anita;

larry.friends.dragos = dragos;
steven.friends.dragos = dragos;
anita.friends.dragos = dragos;

larry.friends.steven = steven;
anita.friends.steven = steven;
steven.friends.larry = larry;
steven.friends.anita = anita;

anita.friends.carol = carol;
carol.friends.anita = anita;

delete dragos.friends.larry;
delete larry.friends.dragos;

console.log(
  larry.friends.steven.friends.dragos.name + ' ' +
  larry.friends.steven.friends.dragos.surname 
);

console.log(
  dragos.friends.steven.friends.larry.name + ' ' +
  dragos.friends.steven.friends.larry.surname
);

console.log(
  carol.friends.anita.friends.dragos.name + ' ' +
  carol.friends.anita.friends.dragos.surname 
);

console.log(larry.friends.steven.friends.dragos.name.length + larry.friends.steven.friends.dragos.surname.length);


// Folosind keywordul delete sterge prietenia dintre Dragos si Larry (si invers).
// Afiseaza numele complet al lui Dragos folosind obiectul Larry.
// Afiseaza numele complet a lui Larry folosind obiectul Dragos.
// Folosind obiectul Carol afiseaza numele complet al lui Dragos. 
// Folosind obiectul Anita afiseaza numarul total de caractere al numelui complet al lui Dragos.
