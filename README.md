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

## Notes
recursion vs iterative
    What is recursion? how is it used
        a function that calls itself over and over again
        one problem, do it over and over again on a smaller or changing piece until you hit an end point, the base case
    2 components that make up a recursive function
    How to visualize the call stack to better understand and debug recursive functions

Big O, asymptotic analysis- what is it? what are time complexities? It is useful in the analysis of algorithms and determining efficiency over time. How well was the problem solved, in coding there is often many ways to solve a problem and Big O allows us to objectively determine what is a "better" solution; it tells us, in simplified terms, how long an algorithm takes to run. So what is good code? it is 1. [readable] and 2. [scaleable] (the scaleable part is where Big O factors in, or how many steps will it take for a machine to run the code while factoring in speed and memory)


for simplicity it is reduced to a few base cases
* O(1)- just the time it takes to do a single action
* O(n)- 
* n- basically a one to one
* O(n²)- 
* O(2↑n)- O of 2 to the Nth power; takes forever,a brute force solution

![BigO visualized](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Comparison_computational_complexity.svg/1024px-Comparison_computational_complexity.svg.png)
