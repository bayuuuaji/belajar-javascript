var tanya = true;
while ( tanya) {
    // menangkap pilihan player
    var p = prompt('Pilih : gajah, semut, orang');

    // menangkap pilihan computer
    // membangkitkan bilangan random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah'
    } else if (comp >= 0.34 && comp < 0.66) {
        comp = 'orang'
    } else {
        comp = 'semut'
    }

    // menentukan rules
    var hasil = '';

    if (p == comp) {
        hasil = 'SERI!';
    } else if (p == 'gajah') {
        // if (comp == 'orang') {
        //     hasil = 'MENANG!'
        // } else {
        //     hasil = 'KALAH!';
        // }
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'semut') {
        hasil = (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
    } else if (p == 'orang') {
        hasil = (comp == 'semut') ? 'MENANG!' : 'KALAH!';
    } else {
        hasil = 'Memasukkan pilihan yang salah!';
    }

    // tampilkan hasilnya
    alert('Kamu memilih : ' + p + ' \nKomputer memilih : ' + comp + '\nMaka hasilnya  : Kamu ' + hasil);

    // ulangi lagi
    tanya = confirm('Lagi?');
}

// selesai
alert('Terimakasih sudah bermain')