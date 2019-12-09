function changeVocals(str) {
    //code di sini
    var ubah = '';
    var next = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'i' || str[i] == 'u' || str[i] == 'e' || str[i] == 'o' || str[i] == 'A' || str[i] == 'I' || str[i] == 'U' || str[i] == 'E' || str[i] == 'O') {
            next = Number(str.charCodeAt(i)) + 1;
            ubah += String.fromCharCode(next);
        }
        else {
            ubah+=str[i]
        }
    }
    return ubah;
}

function reverseWord(str) {
    //code di sini
    var reverse = ''
    for (var i = str.length - 1; i >= 0; i--) {
        reverse += str[i]
    }
    return reverse
}

function setLowerUpperCase(str) {
    //code di sini
    var tukar = '';
    for (i = 0; i < str.length; i++) {
        if (str[i] == str[i].toLowerCase()) {
            tukar += str[i].toUpperCase();
        }
        else {
            tukar += str[i].toLowerCase();
        }
    }
    return tukar;
}

function removeSpaces(str) {
    //code di sini
    var remove = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            remove += str[i]
        }
    }
    return remove
}

function passwordGenerator(name) {
    //code di sini
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))
}


console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'