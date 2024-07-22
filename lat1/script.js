// contoh penulisan variable
var nama = 'Umar',
    umur = 17,
    lulus = true;

// contoh penulisan boolean
  console.log(  Boolean (
    x = 10,
    x > 20
    ),
)
    console.log(
        Boolean ( 0 ),
    )

// contoh penulisan pop up box
    alert ('selamat datang..');
    var lagi = true;

    while ( lagi ) {
        var nama = prompt ('masukan nama:');
        alert ( 'halo ' + nama );

        lagi = confirm ('mau coba lagi?');
    }

    alert ('terima kasih!')

// contoh penulisan pengulangan while, for
    var jmlAngkot = 35;
    var angkotBeroperasi = 29;
    

//     while(noAngkot <= angkotBeroperasi) {
//     console.log( 'angkot no. ' + noAngkot + ' beroperasi dengan baik.')
//     noAngkot++;
// };
//     for(noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
//         console.log('angkot no. ' + noAngkot + ' sedang tidak beroperasi')
//     }

for(var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++ ) {
    if(noAngkot <= 29) {
        console.log ('angkot no. ' + noAngkot + ' beroperasi dengan baik')
    } 
    else{
        console.log('angkot no. ' + noAngkot + ' sedang tidak beroperasi')
    }
}

// contoh penulisan if else dan else if
    var angka = prompt('masukan angka:');
        if(angka % 2 == 0) {
            alert(angka + ' adalah bilangan genap');
        } else if(angka % 2 == 1) {
            alert(angka + ' adalah bilangan ganjil');
        } else {
            alert('yang anda masukan bukan angka!!');
        }