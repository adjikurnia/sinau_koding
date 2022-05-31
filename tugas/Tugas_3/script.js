//Tugas 3.1
console.log ('Tugas 3.1');
var noAngkot = 1;
while (noAngkot <=10) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    noAngkot++;
}

//Tugas 3.2
console.log ('');
console.log ('Tugas 3.2');
var jmlAngkot = 10;
var angkotBeroperasi = 6;

for ( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

if (noAngkot <= angkotBeroperasi) {
console.log ('Angkot No ' + noAngkot + ' beroperasi dengan baik.');
} else if (noAngkot === 8){
console.log ('Angkot No ' + noAngkot + ' sedang lembur.');
} else {
console.log ('Angkot No ' + noAngkot + ' sedang tidak beroperasi.');
}
}

    