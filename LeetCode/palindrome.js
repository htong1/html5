const isPalindrome = function(s) {
s = s.toLowerCase().replace(/[\,\.\(\)\&\{\}\[\]\`\~\:\;\"\<\>\?\+\$\@\#\%\*\=\-\^\\\/\n\W/]/g, "");
s = s.replace(/[\-\_\/]/g, "");
if(s.split("").reverse().join("") === s){
  return true;
} 
 return false;   
};