// function jumlahVolumeKubus(a, b) {
//   var volumeA;
//   var volumeB;
//   var total;

//   volumeA = a * a * a;
//   volumeB = b * b * b;

//   total = volumeA + volumeB;

//   return total;
// }

// alert(jumlahVolumeKubus(8, 3));
// alert(jumlahVolumeKubus(10, 15));

// SEDERHANAKAN

function volumeDuaKubus(a, b) {
  return a * a * a + b * b * b;
}

alert(volumeDuaKubus(8, 3));