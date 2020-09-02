
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
//O(a*b)- objectively a bad but correct solution
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j< arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true;
            }
        }
    }
    return false
}
//O(a+b) and O(1)- space complexity vs 
//O(a*b) O(a)- space complexity = big time difference but uses more space, what is more value?

function commonItems2(arr1, arr2) {
//loop through the first array and create object where properties === items in the array
    let map = {};
    for (let i = 0; i < arr1.length; i++) {
        if(!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }
//loop through the second array and check if item in second array exists on created object
    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true
        }
    }
    return false
}
//if the arrays get excessively large, solution 2 is considerably better
//try to break it after you write it
//console.log(containsItem2(array1,array2))

//methods can simplify code and make them more readable (depends on the language you are using)
//make sure your code is as modular and commented as possible
function containsItem3(arr1,arr2) {
    return arr1.some(item => arr2.includes(item))
}
//what a sexy solution
//console.log(containsItem3(array1,array2))

function hasPairSum(arr, sum) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] + arr[j] === sum) {
                return true;
            }
        }
    }
    return false;
}

function hasPairSum2(arr, sum) {
    const mySet = new Set();
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (mySet.has(arr[1])) {
            return true;
        }
        mySet.add(sum - arr[i])
    }
    return false
}
//console.log(hasPairSum([6,4,3,2,1], 9))

const strings = ['a', 'b', 'c', 'd']

function getCount(str) {
    let vowels = ['a','e','i','o','u'];
    let vowelsCount = 0;
    str.split('').forEach(character => {
        if(vowels.includes(character)) {
            vowelsCount += 1
        }
    })
    
    return vowelsCount;
}

// console.log(getCount('pear tree'))
// console.log(getCount('o a kak ushakov lil vo kashu kakao'))
// console.log(getCount('abracadabra'))

function reverseString(str) {
    return str.split('').reverse().join('')
}

// console.log(reverseString('tasty'))

function mergeTwo(arr1, arr2) {
    
}