//[ALERT-BOX]
//alert("Hii Ravi gaygol ...!")
//*************************************************************************************

//CONFIRM-BOX
/*var userRequest;
if (confirm("Do you want to save changes?") == true) {
    userRequest = "Data saved successfully!";
} else {
    userRequest = "Save Cancelled!";
}*/
//*************************************************************************************

//[PROMPT-BOX]
/*var DOB=prompt("Please enter your date of birth..","19-02-1997");
if(DOB!=null)
{
    alert("Your date of birth is "+DOB+" click ok to confirm");
}*/
//*************************************************************************************

//[FUNCTION-PRACTICE]
/*function showData(firstname,lastname)
{
    alert("hiiii" +firstname+" "+lastname);
}
showData("Ravi","Gaygol");
showData(10,20);*/

/*function showData()
{
//    alert("Hello  "+arguments[1]+" "+arguments[0]);
for(var i=0;i<arguments.length;i++)
{
    alert("Hello Good Morning "+arguments[i]);
}
}
showData("Ravi ","Gaygol");*/

/*function sum(a,b)
{
    return a+b;
}
var result=sum(10,20);
function multiply(a,b)
{
    console.log(a*b);
}
result=multiply(10,20);
console.log(result);*/

/*function mul(x)
{
    function ml(y)
    {
        return x*y;
    }
    return ml;
}
var fn=mul(5);
//fn(5);
console.log(fn(10));*/

/*var addition=function add(a,b)
{
    return a+b;
}
var output1=addition(10,10);
console.log(output1);*/

/*var abc=function(abc)
{
    alert("Hello "+abc);
}
abc("Ravi");*/

/*function outer(Fname)
{
    function inner(Lname)
    {
        alert("Hiiiiiiii   "+Fname+" "+Lname);
    }
    return inner("Gaygol");
}
outer("Ravi");*/

//*************************************************************************************
//[PROMISE]
function display(message)
{
document.write(message);
}
/* let Mypromise=new Promise(function(Psolve,Preject)
{
    let x=1;
    if(x==0)
    {
        Psolve("Problem solved");
    }
    else{

        Preject("Something gone wrong");
    }

}
);
Mypromise.then(
(value)=>{display(value);},
(error)=>{display(error);}  
);  */
let Mypromise=new Promise(function(Psolve,Preject)
{
    let x=0;
    if(x==0)
    {
        setTimeout(function(){Psolve("Problem solved");},5000);

    }
    else{

        Preject("Something gone wrong");
    }

}
);
Mypromise.then(
(value)=>{display(value);},
(error)=>{display(error);}  
);