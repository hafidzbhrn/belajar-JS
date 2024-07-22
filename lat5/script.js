// array
// manipulasi array

// 1. menambah isi array
// var arr = [];
// arr[0] = "umar";
// arr[1] = "hafidz";
// arr[2] = "baharun";

// console.log(arr);

// 2. mmenghapus isi array
// var arr = ["umar", "hafidz", "baharun"];
// arr[1] = undefined;
// console.log(arr);

// 3. menampilkan isi array
// var arr = ["umar", "hafidz", "baharun"];

// for ( var i = 0; i < arr.length; i++) {
//     console.log('Nama ke-' + (i+1) + ' : ' + arr[i]);
// }


//  Method pada array
// 1. Join
// var arr = ["umar", "hafidz", "baharun"];
// console.log(arr.join('_'));

// 2. push & pop
// var arr = ["umar", "hafidz", "baharun"];
// arr.pop();
// arr.push('bening');

// console.log(arr.join(', '))

// 3. unshift & shift
// arr.unshift('bening');
// arr.shift();
// console.log(arr.join(', '))

// 4. splice
// arr.splice(2, 0, "bening", "reyhan");
// console.log(arr.join(', '));

// 5. slice
// var arr = ["umar", "satria", "bening", "thomas"];
// var arr2 = arr.slice(1,3);
// console.log(arr.join(', '));
// console.log(arr2.join(', '));

// 6. forEach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var nama = ['umar', 'hafidz', 'baharun'];
// for(var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

// angka.forEach(function(e) {
//     console.log(e);
// });

// nama.forEach(function(e, i) {
//     console.log('nama ke-' + (i+1) + ' adalah : ' + e);
// });

// // 7. map
// var angka = [1,2,5,7,4,8,9,3,6];
// var angka2 = angka.map(function(e) {
//     return e * 5;
// });
// console.log(angka2.join(' - '));

// 8. sort
// var angka = [50,1,2,40,5,10,7,30,4,20,8,9,3,6];
// console.log(angka.join(' - '));
// angka.sort(function(a,b) {
//     return a-b;
// });
// console.log(angka.join(' - '));

// 9. filter
// var angka = [1,2,40,5,10,7,30,4,20,8,9,3,6];
// var angka2 = angka.filter(function(x) {
//         return x == 7;
    
// });
// console.log(angka2);

// 10. find
var angka = [1,2,40,5,10,7,30,4,20,8,9,3,6];
var angka2 = angka.find(function(x) {
        return x > 7;
    
});
console.log(angka2);
