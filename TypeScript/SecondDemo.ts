let num1:number = 1; 
let num3: number = 3;
let num4: number = 4;    
function letDeclaration() { 
    let num2:number = 2; 

    if (num2 > num1) { 
        num3++; 
    } 

    while(num1 < num2) { 
        num1++;
    }

    console.log(num1); 
    console.log(num2);  
    console.log(num3); 
    console.log(num4); 
}
letDeclaration();