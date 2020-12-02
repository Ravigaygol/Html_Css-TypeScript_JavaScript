//NUMBER-METHODS
//1-Exponential
/* let Mynumber:number=123456;
console.log(Mynumber.toExponential());
console.log(Mynumber.toExponential(1));
console.log(Mynumber.toExponential(2));
console.log(Mynumber.toExponential(3));
 */
//******************************************************* */

//2-toFixed
/* let Mynumber:number=10.87885;
console.log(Mynumber.toFixed());
console.log(Mynumber.toFixed(1));
console.log(Mynumber.toFixed(2));
console.log(Mynumber.toFixed(3));
console.log(Mynumber.toFixed(4)); */
//******************************************************* */

//3-toLocalString
/* let myNumber: number = 10667.987;
console.log(myNumber.toLocaleString()); // returns 10,667.987 - US English
console.log(myNumber.toLocaleString('de-DE')); // returns 10.667,987 - German
console.log(myNumber.toLocaleString('ar-EG')); // returns 10667.987 in Arebic
 */
//******************************************************* */

//4-toPrecision
/* let myNumber: number = 10.5679;
console.log(myNumber.toPrecision(1)); // returns 1e+1
console.log(myNumber.toPrecision(2)); // returns 11
console.log(myNumber.toPrecision(3)); // returns 10.6
console.log(myNumber.toPrecision(4)); // returns 10.57
console.log(myNumber.toPrecision(5)); */
//******************************************************* */

//5-toString
/* let myNumber: number = 123;
console.log(myNumber.toString());  // returns '123'
console.log(myNumber.toString(2)); // returns '1111011'
console.log(myNumber.toString(4)); // returns '1323'
console.log(myNumber.toString(8)); // returns '173'
console.log(myNumber.toString(16)); // returns '7b'
console.log(myNumber.toString(36)); // returns '3f' */
//******************************************************* */

//6-valueOf

let myNumber = new Number(123);
console.log(myNumber) //Output: a number object with value 123
console.log(myNumber.valueOf()) //Output: 123
console.log(typeof myNumber) //Output: object

let num2 = myNumber.valueOf() 
console.log(num2) //Output: 123
console.log(typeof num2) //Output: number