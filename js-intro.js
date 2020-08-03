
//PigLatin
function pigLt(str) {
    let normalArr = str.split(' ');
    let pigArr = [];
    newWord = '';
    for(let word in normalArr) {
        let newWord = normalArr[word].substring(1) + normalArr[word].substring(0, 1) + 'ay';
        pigArr.push(newWord);
    }
    return pigArr.join(' ');
}
// console.log(pigLt('bolster'));
// console.log(pigLt('cannon'));

//is palindrome
function isPalindrome(str) {
    str = str.toLowerCase();
    return (str == str.split('').reverse().join(''));
}
// console.log(isPalindrome('level'));
// console.log(isPalindrome('A car, a man, a maraca'));

const nemo = ['nemo', 'bruce', 'carl', 'alberta', 'jeff', 'kyle'];

function findNemo(arr) {
    let t0 = performance.now()
    for (let i = 0; 0 < arr.length; i++) {
        if (arr[i] ==='nemo') {
            console.log('Found Nemo');
        }
    }
    let t1 = performance.now()
    console.log('the call to find Nemo took ' + (t1 - t0) + ' miliseconds')
}

//first and last

function firstLast(arr) {
    let objOutput = { [arr[0]]: [...arr].pop() }
    return objOutput
}

const array1 = ['a','b','c','d','f']
const array2 = ['f','i','j','k','l']

function commonItems(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j< arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true;
            }
        }
    }
    return false
}