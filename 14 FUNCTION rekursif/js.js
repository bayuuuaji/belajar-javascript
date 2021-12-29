// looping umum

// for (var i = 10; i > 0; i--){
//   console.log(i);
// }

// looping rekursif tetapi infinite loop
// function tampilAngka(n) {
//   console.log(n);
//   return tampilAngka(n-1)
// }
// tampilAngka(10);

// rekursif yang benar
function tampilAngka(n) {
  if (n === 0) return;
  console.log(n);
  tampilAngka(n - 1);
}
tampilAngka(12);

// rekursif faktorial
function faktorial(n) {
  if (n === 0) return 1;
  return n * faktorial(n - 1);
}
faktorial(5);