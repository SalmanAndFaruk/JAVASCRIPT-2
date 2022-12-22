//function mathmatic(num1,num2,num3){

   // document.write ("<br/>The Addition" + (num1+num2+num3));
   // document.write ("<br/>The substraction" + (num1-num2-num3));
    //document.write ("<br/>The multification" + (num1*num2*num3));
    //document.write ("<br/>The division" + (num1/num2/num3));
//}
//let N1 = Number (prompt("Enter a number"));
//let N2 = Number (prompt("Enter a number"));
//let N3 = Number (prompt("Enter a number"));
//mathmatic(N1,N2,N3);


//parameterlized function calling
//function square_p(num){
    //document.write(",br/>Parameterlized function result is: " + num *num);
//}
//square_p(16);
//square_p(25);
//square_p(10);
const userName = prompt("Write user name");
const userPassword = prompt("write user password");

function view (userName, userPassword){
    document.write("Write user name " + userName + "<br>" + "Write user password"+ userPassword);
}
view (userName, userPassword);

