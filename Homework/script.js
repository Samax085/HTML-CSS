1
//let d = 7;
//console.log(d);
//console.log(d ** 2);
//console.log(d ** 3);
2
//let num = prompt('Enter the number');
//if(num > 0){
//    console.log(num * 2);
//}
3
//let num = prompt('Enter the numer');
//if(num > 0){
//    console.log("Положительное");
//}
//if(num < 0){
//    console.log('Отрицательное');
//}
//if(num == 0){
//    console.log('Ноль')
//}
4
//let num1 = prompt(Number('Enter first number'));
//let num2 = prompt(Number('Enter second number'));
//if(num1 > num2){
//    console.log(+num1 + +num2);
//}
//if(num1 < num2){
//    console.log(num1 * num2);
//}
//if(num1 == num2){
//    console.log('Числа равные');
//}
5
//let num = prompt('Enter the number');
//if( num < 0){
//    console.log(num ** 2);
//}
//else{
//    console.log('Ошибка');
//}
6
//let pupils = prompt('How mutch is a pupils');
//let chear = prompt('How mutch is a chear');
//if(pupils >= chear){
//    console.log('Стульев хватает');
//}
//if(pupils < chear){
//    console.log('Стульев не хватает');
//}
7
//let text1 = 'Start';
//let text2 = 'Finish';
//let num = [];
//console.log(text1);
//for(i = 0; i < 10; i++){
//    num.push = i;     
//     console.log(num);     
//}
//console.log(text2);
8
//let massive = [];
//for(i = 9; i < 100; i++){
//    if(i % 5 == 0){
//        massive = i;
//    }
//    console.log(massive);
//}
9
//let num = Number(prompt('Enter the number'));
//let num1 = num + 14;
//let num2 = 0;
//
//for(i = num; i < num1 ; i++){
//if(i % 2 != 0){
//    num2 = i;
//    console.log(num2);
//}
//}
10
//let massive = [];
//for(i = 0; i < 100; i++){
//    massive = [i];
//    if(massive > 15 || massive == 15){
//        console.log(massive);
//    }    
//}
11
//let massive = [];
//for (i = 0; i < 100; i++) {
//    massive = [i];
//    if (massive % 2 != 0) {
//        console.log(massive);
//    }
//}
12
//let massive = [];
//for (i = 0; i < 100; i++) {
//    massive = [i];
//    if (massive % 3 == 0) {
//        console.log(massive);
//    }
//}
13
//let massive = [];
//let sum = 0;
//for (i = 0; i < 100; i++) {  
//    sum = sum + i;    
//}
//console.log(sum);
14
// let massive = [];
// let sum = 0;
// for (i = 0; i < 100; i++) {
// if(i % 2 != 0){
// massive = i;
// sum = sum + massive;        
// }
// }
// console.log(sum);
15
let massive = [];
let even = 0;
let odd = 0;
let sumEven = 0;
let sumOdd = 0;
let sum = 0;
for (i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        even = i;
        sumEven = sumEven + i;
    }
    //console.log(sumEven);
    if (i % 2 != 0) {
        odd = i;
        sumOdd = sumOdd + i;
    }
    //console.log(sumOdd)
    sum = sumEven + sumOdd;
}
console.log(sum);