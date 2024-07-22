// membuat object angkot
function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }
    this.penumpangTurun = function(namaPenumpang, bayar) {
        if (this.penumpang.length === 0) {
            console.log('Angkot masih kosong.');
            return false;
        }
    

    for( var i = 0; i < this.penumpang.length; i++ ) {
        if( this.penumpang[1] == namaPenumpang ) {
            this.penumpang[1] = undefined;
            this.kas += bayar;
            return this.penumpang;
        }
    }
}




}

var angkot1 = new Angkot('umar hafidz', ['johar', 'simpang 5'], [], 0);

var angkot2 = new Angkot('bening raihan jati', ['jangli', 'banyu manik'], [], 0);