var MyString = "My name is Ravi gaygol Ravi";
//1.Length
//console.log("Length of String="+MyString.length);
//************************************************** */
//2.indexOf
//3.lastIndexOf
//console.log("Index of Ravi in String="+MyString.indexOf("Ravi"));
//console.log("Last-Index of Ravi in String="+MyString.lastIndexOf("Ravi"));
//console.log("Index of Ravi in String="+MyString.indexOf("Ravi",13));
//console.log("Last-Index of Ravi in String="+MyString.lastIndexOf("Ravi",16));
//************************************************** */
//4.search
//console.log("Search gaygol in String="+MyString.search("gaygol"));
//************************************************** */
//5.slice(start,end)
//6.substring(start,end)
//7.substr(start,Length)
//console.log("Slice Ravi="+MyString.slice(11,15));
//console.log(MyString.slice(11));
//console.log("Substring Ravi="+MyString.substring(11,15));
//console.log("SubStr Ravi="+MyString.substr(11,4));
//console.log("SubStr Ravi="+MyString.substr(11));
//console.log("SubStr ="+MyString.substr(-5));
//************************************************** */
//8.replace
//var replaceString:String=MyString.replace("Ravi","ravi");
//console.log(replaceString);
//console.log("Original String="+MyString);
//var insensitiveFlag=MyString.replace(/GAYGOL/i,"GAYGOL");
//console.log(insensitiveFlag);
//console.log("Original String="+MyString);
//var insensitiveFlagReplaceAll=MyString.replace(/Ravi/g,"RAVI");
//console.log(insensitiveFlagReplaceAll);
//console.log("Original String="+MyString);
//************************************************** */
//9.toUpperCase
//10.toLowerCase
//var upCase:String=MyString.toUpperCase();
//console.log("Upper case="+upCase);
//console.log("Original String="+MyString);
//var loCase:String=MyString.toLowerCase();
//console.log("Lower case="+loCase);
//console.log("Original String="+MyString);
//************************************************** */
//11.concat
//var newString:String="is good boy";
//var concatString:String=MyString.concat(" "+newString);
//console.log("Concated String="+concatString);
//console.log("Original String="+MyString);
//************************************************** */
//12.trim
//var trimString:String="           Hi         good     morning     ";
//var finalConcat:String=trimString.trim();
//console.log("Trim String ="+finalConcat);
//************************************************** */
//13.charAt
//14.charCodeAt-The method returns a UTF-16 code (an integer between 0 and 65535).
//var codeAt:number=MyString.charCodeAt(1);
//console.log("CharCodeAt="+codeAt);
//************************************************** */
//15.split
var splitString = "Hi,everyone,Good,morning,all,of,you";
console.log("Split method by space =" + splitString.split(" "));
console.log("Split method by commas =" + splitString.split(","));
console.log("Split method by pipe =" + splitString.split("|"));
//************************************************** */
