var i;



for ( i = 0; i <= 100; i ++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

for ( i = 0; i < 100; i ++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

for ( i = 1; i <= 89; i ++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

for ( i = 0; i < 100; i ++) {
  if (i === 42) {
    break;
  }
  console.log(i);
}

for ( i = 0; i < 100; i ++) {
  if (i % 3 !== 0) {
    continue;
  }
  console.log(i);
}
