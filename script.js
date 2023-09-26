alert ("selamat datang")
var tanya = true
while ( tanya ) {

var p = prompt('silahkan pilih :gunting, kertas, batu');
var comp = Math.random();
if(comp <0.34){
    comp = 'gunting';
}else if (comp >= 0.34 && comp < 0.67 ) {
    comp = 'kertas';
}else {
    comp = 'batu'
}
var hasil = '';
if(p == comp){
    hasil ('seri omg')
}else if (p == 'kertas'){
hasil = (comp == 'batu') ? 'menang' : 'kalah'
} else if (p == 'batu') {
    hasil = (comp == 'batu')? 'menang' : 'kalah'
} else if (p == 'gunting'){
    hasil = (comp == 'kertas')? 'menang' : 'kalah' 
} else{
    hasil = 'memasukan pilihan yang salah';
}
alert('kamu memilih : ' + p + 'dan komuter memilih : ' +comp+ 'maka hasilnya : kamu '+ hasil);

tanya = confirm('main lagi gak?')
}


alert('maksih udah main')