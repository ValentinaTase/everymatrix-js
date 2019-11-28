let person = {
  getName: function() {
    return 'Dragos Iordache';
  },
  getAge: function() {
    return 32;
  },
  getPet: function(){
    return 'Spot the dog';
  }
};

const accessor = (methodSuffix) => {
  let methodName = `get${methodSuffix}`

  return person[methodName]();
};

console.log(accessor('Name'));
console.log(accessor('Age'));
console.log(accessor('Pet'));

console.warn('Folosind accesorul salveaza numele mic al persoanei intr-o variabila si foloseste-l in propoztia: “Eu sunt xxx.”');
let firstName = accessor('Name').split(' ')[0];
console.log(firstName);

console.warn('Afiseaza diferenta de varsta dintre tine si persoana.');
console.log(56 - accessor('Age'));

console.warn('Afiseaza anul de nastere al persoanei folosind anul curent.');
console.log((new Date()).getFullYear() - accessor('Age'));

console.warn('Afiseaza propozitia “Ma numesc xxx si am yy ani si m-am nascut acum aa ani.”');
let age = accessor('Age');
console.log(`Ma numesc ${firstName} si am ${accessor('Age')} ani si m-am nascut acum ${age} de ani.`)

console.warn('Folosind accesorul afiseaza numele persoanei.');
Name = accessor('Name');
console.log(Name);

console.warn('Afiseaza varsta persoanei.');
age = accessor('Age');
console.log(age);

console.warn('Afiseaza anul de nastere al persoanei folosind anul curent.');
console.log((new Date()).getFullYear() - accessor('Age'));

console.warn('Afiseaza propozitia “Ma numesc xxx yyy si am aa ani!”');
console.log(`Ma numesc ${Name} si am ${accessor('Age')} ani `)
