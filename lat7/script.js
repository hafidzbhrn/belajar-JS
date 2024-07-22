// Object
// object literal
// var  siswa = {
//     nama : "umar hafidz baharun",
//     umur : 17,

//     alamat : {
//         jalan : "Jl. Petolongan no.35",
//         Kota  : "Kota Semarang",
//         provinsi : "Jawa Tengah"

//     } 
// };

// object function declaration
// function biodataSiswa(nama, umur, jurusan, kelas) {
//     var siswa = {};
//     siswa.nama = nama;
//     siswa.umur = umur;
//     siswa.jurusan = jurusan;
//     siswa.kelas = kelas;
//     return siswa
// };

// var siswa1 = biodataSiswa('bening raihan jati', '16', 'PPLG', 'XII PPLG 1');

// var siswa2 = biodataSiswa('umar hafidz', '17', 'PPLG', 'XII PPLG 3');

// constructor
function biodataSiswa(nama, umur, jurusan, kelas) {
    this.nama = nama;
    this.umur = umur;
    this.jurusan = jurusan;
    this.kelas = kelas;
}

var siswa1 = new biodataSiswa('bening raihan jati', '16', 'PPLG', 'XII PPLG 1');
var siswa2 = new biodataSiswa('umar hafidz', '17', 'PPLG', 'XII PPLG 3');
