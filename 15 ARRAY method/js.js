// manipulasi array

// // 1. menambah isi array
// var arr = ['a', 1, true];
// console.log(arr)

// // 2. menghapus isi array
// var arr = ['bayu', 'aji', 'santoso'];
// arr[2] = undefined;
// console.log(arr);

// // 3. menampilkan isi array
// var arr = ['bayu', 'aji', 'santoso', 'mangunjiwo'];
// for (var i = 0; i < arr.length; i++) {
//   console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
// }



// Method pada array
// var arr = ['bayu', 'aji', 'santoso', 'ruby', 'lanaya'];
// 1. Join
// console.log(arr.join(' - '));

// 2. push & pop
// arr.push('mangunjiwo', 'notoboto);
// arr.pop();
// console.log(arr.join(' - '));

// 3. unshift & shift
// arr.unshift('mangunjiwo', 'notoboto')
// arr.shift();
// console.log(arr.join(' - '));

// 4.splice & splice
// arr.splice(1, 2, 'mangunjiwo', 'notoboto');
// var arr2 = arr.slice(2, 4);
// console.log(arr2.join(' - '));

// 5. forEach
var angka = [1, 2, 10, 5, 4, 3, 6, 9, 7, 8];
var nama = ['bayu', 'aji', 'santoso', 'ruby', 'lanaya'];

// angka.forEach(function (e) {
//     console.log(e);
// })

// nama.forEach(function (e, i) {
//     console.log('Mahasiswa ke-' + (i+1) + ' adalah ' + e);
// })

// 6. map
// var angka2 = angka.map(function (e) {
//     return e * 2;
// })
// console.log(angka2.join(' - '))

//  7. sort
// angka.sort(function (a, b) {
//     return a - b;
// });
// console.log(angka.join(' - '));

// 8. filter
// var angka2 = angka.filter(function (x) {
//     return x > 5;
// })
// console.log(angka2.join(' - '))

//  9. Find
var angka2 = angka.find(function (x) {
    return x > 5;
})
console.log(angka2)
