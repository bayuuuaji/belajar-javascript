var item = prompt('masukkan nama makanan/minuman : \n (contoh: nasi, daging, susu, pizza, mie)');

switch (item) {
  case 'nasi':
    alert('makanan / minuman SEHAT');
    break;
  case 'daging':
    alert('makanan / minuman SEHAT');
    break;
  case 'susu':
    alert('makanan / minuman SEHAT');
    break;
  case 'pizza':
  case 'mie':
    alert('makanan / minuman TIDAK SEHAT');
    break;
  default:
    alert('makanan/minuman yang anda masukkan salah');
}
