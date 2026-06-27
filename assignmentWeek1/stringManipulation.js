let reversed ="";
let str1="";
function strreverse(str1) {

let length = str1.length

for (i=str1.length; i>=0;i--)
{
    let char = str1.charAt(i)
    reversed = reversed + char
}
console.log("Reversing the given word  " + str1 + "  gives the word  " + reversed)
}
if (reversed === str1 ){
    console.log("The Given word  "+ str1 + "  is a palindrome")
}
else {
     console.log("The Given word  "+ str1 + "  is not a palindrome")

}


strreverse("madam");
