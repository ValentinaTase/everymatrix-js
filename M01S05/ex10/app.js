const calculateSurface = (L, l) => {
  if (l) {
    return L * l;
  } else {
  return Math.pow(L, 2);
}
};

console.log(`Suprafata unui patrat 2x2 este: ${calculateSurface(2)}`);
console.log(`Suprafata unui patrat 2x6 este: ${calculateSurface(2, 6)}`);
