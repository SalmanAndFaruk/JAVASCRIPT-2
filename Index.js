function mathmatic(num1,num2,num3){
    document.write ("<br/>The Addition" + (num1+num2+num3));
    document.write ("<br/>The substraction" + (num1-num2-num3));
    document.write ("<br/>The multification" + (num1*num2*num3));
    document.write ("<br/>The division" + (num1/num2/num3));
}
let N1 = Number (prompt("Enter a number"));
let N2 = Number (prompt("Enter a number"));
let N3 = Number (prompt("Enter a number"));
mathmatic(N1,N2,N3);
