/* recursion vs iterative
    What is recursion? how is it used
        a function that calls itself over and over again
        one problem, do it over and over again on a smaller or changing piece until you hit an end point, the base case
    2 components that make up a recursive function
    How to visualize the call stack to better understand and debug recursive functions
*/
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
console.log(pigLt('bolster'));
console.log(pigLt('cannon'));

//is palindrome
function isPalindrome(str) {
    str = str.toLowerCase();
    return (str == str.split('').reverse().join(''));
}
console.log(isPalindrome('level'));
console.log(isPalindrome('A car, a man, a maraca'));
