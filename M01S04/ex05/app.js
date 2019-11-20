var i;

for (i = 0; i <= 100; i++) {
  console.log(i);

  if (i % 7 !== 0) {
    continue;
  }

console.log('Acest numar este multiplu de 7')

}

//Folosind un bloc if si keywordul continue, afiseaza mesajul "Acest numar este multiplu de 7." atunci cand este cazul.

var i;
var number = prompt('Introdu un numar divizibil');

for (i = 0; i <= 100; i++) {
  console.log(i);

  if (i % number !== 0) {
    continue;
  }
  
console.log(`Acest numar este multiplu de ${number}`)

}

//Folosind metoda prompt cere utilizatorului numarul pentru care trebuie sa gasesti multipli si afiseaza mesajul: “Acest numar este multiplu de x.” 