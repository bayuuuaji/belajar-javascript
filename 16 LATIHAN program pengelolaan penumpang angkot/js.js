var penumpang = ['Bayu','Aji','Santoso'];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
      penumpang.push(namaPenumpang);
      console.log(namaPenumpang + ' naik angkot dan duduk di kursi ' + penumpang.length);
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      } else if (penumpang[i] == namaPenumpang) {
        console.log(namaPenumpang + ' sudah ada di dalam angkot');
        return penumpang;
      } else if (i == penumpang.length - 1) {
          penumpang.push(namaPenumpang);
          console.log(namaPenumpang + ' naik angkot dan duduk di kursi ' + penumpang.length);
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.log('Angkot masih kosong.');
    return penumpang;
  } else {
    for (var i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
          penumpang[i] = undefined;
          console.log(namaPenumpang + ' sudah turun.');
        return penumpang;
      } else if (i == penumpang.length - 1) {
          console.log(namaPenumpang + ' tidak ada di dalam angkot');
          return penumpang;
      }
    }
  }
};
