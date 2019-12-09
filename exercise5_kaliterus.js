  function kaliTerusRekursif(angka) {
    // you can only write your code here!
    if(String(angka).length<=1) {
        return angka
    }
    // var n=angka%10
    return kaliTerusRekursif((angka%10)*kaliTerusRekursif(Math.floor(angka/10)))  
  }
    // TEST CASES
    console.log(kaliTerusRekursif(66)); // 8
    console.log(kaliTerusRekursif(3)); // 3
    console.log(kaliTerusRekursif(24)); // 8
    console.log(kaliTerusRekursif(654)); // 0
    console.log(kaliTerusRekursif(1231)); // 6
    console.log(kaliTerusRekursif(9182));
  