var jumlahAngkot = 10;
var angkotSehat = 2;
var noAngkot = 1;

while (noAngkot <= angkotSehat) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.')
    noAngkot++
}

for (noAngkot = angkotSehat +1; noAngkot <= jumlahAngkot; noAngkot++){
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.')
}