// contoh penulisa else if
var jmlAngkot = 10;
var angkotBeroperasi = 6;

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {
    if(noAngkot <= 6 && noAngkot !== 5) {
        console.log ('angkot no. ' + noAngkot + ' beroperasi dengan baik')
    } else if(noAngkot === 5 || noAngkot === 8 || noAngkot === 10) {
        console.log('angkot no. ' + noAngkot + ' sedang lembur')
    } else{
        console.log('angkot no. ' + noAngkot + ' sedang tidak beroperasi')
    }
}

// contoh penulisan switch
var item = prompt('masukan nama makanan / minuman sehat : \n (cth: nasi, daging, telur, susu, pizza, burger, cocacola)');

switch (item) {
    case 'daging':
    
    case 'nasi':

    case 'telur':

    case 'susu':
        alert('Makanan / Minuman Sehat!');
        break;
    case 'pizza':
        
    case 'burger':
        
    case 'cocacola':
        alert('Makanan / Minuman Tidak Sehat!');
        break;

    default:
        alert('Anda Memasukan Nama Makanan / Minuman Yang Salah!');
        break;
}

// contoh penulisan pengulangan dan pengkondisian bersarang
var s = '';
for(var i = 25; i > 0; i--) {
    for(var b = 0; b < i; b++) {
        s += '*';
    }
    s += '\n';
}

console.log(s);