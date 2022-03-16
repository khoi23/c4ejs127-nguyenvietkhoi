// // bài 1 

// let numberOne = parseFloat(prompt('Nhập số thứ nhất', '12.23'));
// let numberTwo = parseFloat(prompt('Nhập số thứ hai', '12.23'));
// let input = prompt('Nhap chuc nang: +, -, * và /.','+');
// let result = '';

// if (input === '+') {
//     result = numberOne + numberTwo;
// } else if (input === '-') {
//     result = numberOne - numberTwo;
// }else if (input === '*') {
//     result = numberOne * numberTwo;
// }else if (input === '/') {
//     result = numberOne / numberTwo;
// } else {
//     result = undefined;
// }
// console.log(result);

// switch (input) {
//     case '+':
//         result = numberOne + numberTwo;
//         break;
//     case '-':
//         result = numberOne - numberTwo;
//         break;
//     case '*':
//         result = numberOne * numberTwo;
//         break;
//     case '/':
//         result = numberOne / numberTwo;
//         break;

//     default: result = NaN
//         break;
// }
// console.log(result);
// // bai 2

const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// if (number < 2) isPrime = false;
// let i = 2;
// while(i < number) {
//     if (number % i == 0) {
//         isPrime = false;
//         break
//     } 
//     i++;
// }
if (number < 2) {
    isPrime = false;
} else {
    for (let i = 2; i < number; i++) {
        if (number % i == 0){
            isPrime = false;
            break;
        }
    }
}

if (isPrime === true) {
    console.log(`${number} la so nguyen to`);
} else {
    console.log(`${number} khong la so nguyen to`);
}