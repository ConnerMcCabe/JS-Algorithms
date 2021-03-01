An Algorithm a day keeps the Corona at bay, with the occaisional notes mixed in
### 1- PigLatin
    a function that takes a string, and returns a string that removes the first character and adds it to the end followed by '-ay'
    ex; pigLt('bolster') => 'olsterbay'
    ex; pigLt('cat') => 'atcay'
### 2- Palindromes
    a function that takes a string, to sees if the letters are the same order if reversed, returns a boolean
    ex; isPalindrome('taco cat') => true
    ex; isPalindrome('oyster') => false
### 3- Big O
    running through different ways to solve a problem, finding nemo and taking a look at visualizing how long each approach is going to take using performance.now()
### 4- First and Last
    a function that takes an array and returns the first and last items entered into it
### 5- Arrays in Common
    a function that takes two arrays and compares the contents to see if they have any items in common, then returns a boolean
### 6- Adding to containsItem and hasPairSum functions
    given an array and a sum, find two integers within the array that add up to the sum and return a bool if true
    a function that takes two arrays and compares the contents to see if they have any items in common, then returns a boolean
### 7- VowelCount
    Return the number (count) of vowels in the given string. Consider (a, e, i, o, u) as vowels (but not y). The input string
    will only consist of lower case letters and/or spaces.
### 8- MergeSortedArrays
    given two sorted arrays into a single sorted array, simple and long form examples added
### 9- SarcasticSponge
    given a string, return the same string with all even indexed characters in each word upper cased, and all odd indexed
    characters in each word lower cased, the zeroth index being even (therefore capitalized) strings will only contain 
    alphabetical characters and spaces, spaces only present with multiple words and will only contain a single space
### 10- Romanize
    given a positive number, return a string that contains the Roman Numeral representation of the integer
### 11- FirstRecurringCharacter
    given an array, determine if there are any characters that are repeated within and return the first character
### 12- TwoSum
    given an array of integers and a target integer, find the two numbers in the array that will add up to the target integer
### 13- InfiniteCurry
    create a function that will add numbers in succession no matter the chain length etc.
    add(1)(2)(3); // 6
    add(1)(2)(3)(4); // 10
    add(1)(2)(3)(4)(5); // 15
### 14- ReadableTime
    write a function that takes a non-negative integer (seconds) as an input and returns the time in a readable format of (HH:MM:SS) The maximum time never exceeds 359999 (99:59:59)
### 15- Panagram
    A pangram is a sentence that contains every single letter of the alphabet at least once (case is irrelevant). Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
### 16- MostFrequentWords
    write a function that, given a string of text, returns an array of the top-3 most occuring words
### 17 - HashTagMaker
    given a string, return the string with a (#) symbol in front, all the spaces removed, and the first letter of every word capitalized
    -Return false if there is no string given or if the hashtag would be longer than 140 characters
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
