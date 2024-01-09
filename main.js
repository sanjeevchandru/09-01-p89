document.write("53.to check whether the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string."+"<br>");
function test53(str){
    return (/a...b/).test(str) || (/b...a/).test(str);
}
document.write("The string :biryani , Ans :"+test53("biryani")+"<br><br>");