console.log('Hello venkatesh welcome to Node js session');
var aNum= 50;
var bNum =23.5;
var cNum ="19.4"
console.log("Print 1--> "+aNum+bNum+cNum);
console.log("Print 2--> "+parseInt(aNum+bNum+parseInt(cNum)));
var aStr="Manasa\bVenkatesh\nManasa\tVenkatesh";
var bStr="Manasa\fVenkatesh\nManasa\vVenkatesh";
/*console.log("Print 3");
console.log(aStr);
console.log("Print 4");
console.log(bStr);*/
var cStr="venkatesh is father of Manasa";
var dStr= `Print 4 -->  ${cStr}`;
console.log(dStr);
console.log(dStr.substring(6,11));
console.log(dStr.slice(6,10));
//console.log(dStr.indexOf(6,10));
var cStr="venkatesh is father of Manasa, 1 she is good girl, 2 she study well.";
var eStr =null;
var fStr =undefined;
var gStr;
if(eStr === fStr){
    console.log(eStr + fStr);
    console.log("eStr === fStr");
}else if (gStr === fStr){
    
    console.log(fStr);
    console.log(gStr);
    console.log("gStr === fStr");
}else{
    console.log(eStr);
    console.log(fStr);
    console.log(gStr);
    console.log("eStr !== fStr");
}
console.log("Thanks JAyaram");