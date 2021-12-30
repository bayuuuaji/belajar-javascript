// this
// var a = 10;
// console.log(this.a);

// cara 1 -- function declaration
// function halo() {
//     console.log(this);
//     console.log('halo');
// }
// halo();
// this mengembalikan object global karena di atasnya tidak ada object lain

// cara 2 -- object literal
// var obj = { a: 10, nama: 'Bayu' };
// obj.halo = function () {
//   console.log(this);
//   console.log('halo');
// };
// obj.halo();
// this mengembalikan object di atasnya, yaitu object yang bernama obj

// cara 3 -- constructor
function halo() {
    console.log(this);
    console.log('halo');
}
new halo();
// this mengembalikan object terbaru yang dibuat, yaitu "new halo"
