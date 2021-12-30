// membuat object
// object literal
var mhs1 = {
  nama: 'bayu',
  umur: 19,
  ips: [3.0, 2.59, 2.84, 3.6],
};

var mhs2 = {
  nama: 'aji',
  umur: 20,
  ips: [3.0, 2.59, 2.84, 3.6],
};

// function declaration
function buatObjectMahasiswa(nama, umur, ips) {
    var mhs = {};
    mhs.nama = nama;
    mhs.umur = umur;
    mhs.ips = ips;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Santoso', 19, [3.0, 2.59, 2.84, 3.6]);
var mhs4 = buatObjectMahasiswa('Rudy', 19, [3.0, 2.59, 2.84, 3.6]);

// constructor
function mahasiswa(nama, umur, ips) {
    this.nama = nama;
    this.umur = umur;
    this.ips = ips;
}
var mhs4 = new mahasiswa('Rudy', 19, [3.0, 2.59, 2.84, 3.6]);

// cara memanggil
// mhs.nama
// mhs["nama"]
// mhs.ips[2]
// mhs.alamat.jalan
