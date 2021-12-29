let play = true;
const kesempatan = 3;
// memasukkan nomor user
alert('Tebak Angka dari 1 - 10\nKamu punya ' + kesempatan + ' kali kesempatan');

while (play) {
  // mencari nomor random computer
  const com = Math.floor(Math.random() * 11);
  let i = kesempatan;
  for (i; i > 0; i--) {
    const p = prompt('Kesempatan ke- ' + i);
    let sisaKesempatan = i - 1;

    //   rules
    if (p == com) {
      alert('Angka yg kamu masukkan : ' + p + '\nSelamat Kamu Benar');
      break;
    } else if (p < com) {
      if (sisaKesempatan == 0) {
        alert('Gagal.. \nNomor yang dicari adalah ' + com);
      } else {
        alert('Terlalu Rendah...\nAyo kamu masih punya ' + sisaKesempatan + ' Kesempatan!');
      }
    } else if (p > com) {
      if (sisaKesempatan == 0) {
        alert('gagal');
      } else {
        alert('Terlalu Tinggi...\nAyo kamu masih punya ' + sisaKesempatan + ' kesempatan!');
      }
    }
  }

  play = confirm('Main Lagi?');
}
alert('Terimakasih Sudah Bermain!');
