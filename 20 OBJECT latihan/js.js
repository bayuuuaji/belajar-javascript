// membuat object angkot
function angkot(supir, trayek, penumpang, kas) {
  this.supir = supir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return penumpang;
  }

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length == 0) {
      console.log('angkot masih kosong!');
      return false;
    }
    for (var i = 0; i < this.penumpang.length; i++){
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        console.log('Penumpang atas nama '+namaPenumpang+' telah turun dan membayar sebesar Rp. '+bayar)
        this.kas += bayar;
        return penumpang;
      }
    }
  }
}

var angkot1 = new angkot('Bayu', ['Jombang', 'Malang'], [], 0);
var angkot2 = new angkot('Aji', ['Jombang', 'Mojokerto'], [], 0);