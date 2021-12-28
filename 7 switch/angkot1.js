var jumlahAngkot = 10;
var angkotSehat = 6;

for (noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
  if (noAngkot <= angkotSehat && noAngkot !== 5) {
    console.log('angkot No.' + noAngkot + ' beroperasi dengan baik');
  } else if (noAngkot == 5 || noAngkot == 8 || noAngkot == 10) {
    console.log('angkot No.' + noAngkot + ' sedang lembur');
  } else {
    console.log('angkot No.' + noAngkot + ' tidak beroperasi dengan baik');
  }
}
