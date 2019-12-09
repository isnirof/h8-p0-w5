function sorting(arrNumber) {
  // code di sini
  if(!arrNumber.length) {
    return []
  }
  run = true;
  while (run) {
    run = false;
    for (i = 0; i < arrNumber.length - 1; i++) {
      if (arrNumber[i][0] < arrNumber[i + 1][0]) {
        [arrNumber[i], arrNumber[i + 1]] = [arrNumber[i + 1], arrNumber[i]];
        run = true;
      }
    }
  }
    return arrNumber;
}

function getTotal(arrNumber) {
  // code di sini
  if(!arrNumber.length) {
    return []
  }
  hasil={}
  for(var i=0;i<arrNumber.length;i++) {
    if(!hasil[arrNumber[i]]) {
      hasil[arrNumber[i]]=1
    }
    else {
      hasil[arrNumber[i]]++
    }
  }
  return `angka paling besar adalah ${Object.keys(hasil)[Object.keys(hasil).length-1]} dan jumlah kemunculan sebanyak ${Object.values(hasil)[Object.values(hasil).length-1]} kali`
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''