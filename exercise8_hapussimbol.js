function hapusSimbol(str) {
    return str.replace(/[^\w]/gi, '')
    // return str.match(/[a-z]&&[0-9]/gi);
}
// console.log(string.match(/[a-z]+/gi));

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100

// function hapusSimbol(str) {
//     // you can only write your code here!
//     var numAlp = 'abcdefghijklmnopqrstuvwxyz0123456789'
//     var hasil = ''
//     for (var i = 0; i < str.length; i++) {
//         for (var j = 0; j < numAlp.length; j++) {
//             if (str[i] == numAlp[j]) {
//                 hasil += str[i]
//             }
//         }
//     }
//     return hasil
// }