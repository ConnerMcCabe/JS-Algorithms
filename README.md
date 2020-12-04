An Algorithm a day keeps the Corona at bay, with the occaisional notes mixed in
### D1- PigLatin
    a function that takes a string, and returns a string that removes the first character and adds it to the end followed by '-ay'
    ex; pigLt('bolster') => 'olsterbay'
    ex; pigLt('cat') => 'atcay'
### D2- Palindromes
    a function that takes a string, to sees if the letters are the same order if reversed, returns a boolean
    ex; isPalindrome('taco cat') => true
    ex; isPalindrome('oyster') => false
### D3- Big O
    running through different ways to solve a problem, finding nemo and taking a look at visualizing how long each approach is going to take using performance.now()
### D4- First and Last
    a function that takes an array and returns the first and last items entered into it
### D5- Arrays in Common
    a function that takes two arrays and compares the contents to see if they have any items in common, then returns a boolean
### D6- Adding to containsItem and hasPairSum functions
    given an array and a sum, find two integers within the array that add up to the sum and return a bool if true
    a function that takes two arrays and compares the contents to see if they have any items in common, then returns a boolean
### D7- VowelCount
    Return the number (count) of vowels in the given string. Consider (a, e, i, o, u) as vowels (but not y). The input string
    will only consist of lower case letters and/or spaces.
### D8- MergeSortedArrays
    given two sorted arrays into a single sorted array, simple and long form examples added
### D9- SarcasticSponge
    given a string, return the same string with all even indexed characters in each word upper cased, and all odd indexed
    characters in each word lower cased, the zeroth index being even (therefore capitalized) strings will only contain 
    alphabetical characters and spaces, spaces only present with multiple words and will only contain a single space
### D10- Romanize
    given a positive number, return a string that contains the Roman Numeral representation of the integer
### D11- FirstRecurringCharacter
    given an array, determine if there are any characters that are repeated within and return the first character
### D12- TwoSum
    given an array of integers and a target integer, find the two numbers in the array that will add up to the target integer
### D13- InfiniteCurry
    create a function that will add numbers in succession no matter the chain length etc.
    add(1)(2)(3); // 6
    add(1)(2)(3)(4); // 10
    add(1)(2)(3)(4)(5); // 15

## Notes-
problem solving strategies- 
* breakdown problem into several smaller points, write them out as a bulleted list
* double check on what are expected inputs and outputs (are there any; time, space, or memory constraints)
* if it can be solved with brute force, explain that first (but be able to explain why this might not be the best solution)
* walk through your thought process and psuedo code out your thoughts (and start writing code)
* execute your thoughts in as readable fashion as possible (no confusing naming conventions, no short cuts)

### JS Methods and their time complexity examples
* lookup- O(1)
* push- O(1) add something to the end of an array
* pop- O(1) remove the last item of an array
* unshift- O(1) add somthing to the beginning of an array
* insert- O(n)
* delete O(n)
