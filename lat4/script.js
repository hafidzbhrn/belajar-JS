// function
function jumlahVolumeDuaKubus(a, b) {
    return a * a * a + b * b * b;
}

alert(jumlahVolumeDuaKubus(15, 9));

// contoh penulisan parameter dan argument
function tambah() {
    var hasil = 0;
    for(var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

var coba = tambah(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);
console.log(coba);

// scope
var a = 2;

function tes(a) {
    console.log(a);
}

tes(1);
console.log(a);

// contoh penulisan rekursif
function cetakAngka(n) {
    if( n === 0 ) {
// base case
        return;
    }
    console.log(n);
    cetakAngka(n-1);
}

cetakAngka(99);

