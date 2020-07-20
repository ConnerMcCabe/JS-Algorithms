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


## Notes
recursion vs iterative
    What is recursion? how is it used
        a function that calls itself over and over again
        one problem, do it over and over again on a smaller or changing piece until you hit an end point, the base case
    2 components that make up a recursive function
    How to visualize the call stack to better understand and debug recursive functions
    
Big O, asymptotic analysis- what is it? what are time complexities? It is useful in the analysis of algorithms and determining efficiency over time
for simplicity it is reduced to a few base cases
* 1- just the time it takes to do a single action
* log²n
* n- basically a one to one
* n log²n- 
* n²- takes forever, not a great solution

![BigO visualized](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Comparison_computational_complexity.svg/1024px-Comparison_computational_complexity.svg.png)