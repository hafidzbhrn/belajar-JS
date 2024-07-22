var tanya = true;

while (tanya) {
// menangkap pilihan player
var p = prompt('Pilih : Gunting, Batu, Kertas');

// menangkap pilihan computer

// membangkitkan bilangan random
var comp = Math.random();

if( comp < 0.34) {
    comp = 'Gunting';
} else if ( comp >= 0.34 && comp < 0.67 ) {
    comp = 'Batu';
} else {
    comp = 'Kertas';
} ;
console.log ( comp );

var hasil = '';
// menentukan rules
if ( p == comp ) {
//     hasil = 'SERI!';
    } else if ( p == 'Gunting') {
//     if( comp == 'Kertas') {
//         hasil = 'MENANG!';
//     } else {
//         hasil = 'KALAH!';
//     }
    hasil = ( comp == 'Kertas' ) ? 'MENANG!' : 'KALAH!';
}   else if ( p == 'Kertas') {
    hasil = ( comp == 'Gunting' ) ? 'KALAH!' : 'MENANG!';
    }
    else if ( p == 'Batu' ) {
        hasil = ( comp == 'Kertas') ? 'KALAH!' : 'MENANG!';
    } else {
        hasil = 'Memasukan Pilihan Yang Salah!!';
    }

// tampilkan hasilnya
alert ( 'Kamu Memilih : ' + p + ' Dan Komputer Memilih : ' + comp + '\nMaka Hasilnya Kamu : ' + hasil);

    tanya = confirm('Lagi?');
}
alert('Terima Kasih Sudah Bermain');