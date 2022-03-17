// bài 1

// let numberOne = parseFloat(prompt('Nhập số thứ nhất:', '23,31'));
// let numberTwo = parseInt(prompt('Nhập số thứ hai:', '21,41'));

// let resultOne = Math.sqrt(numberOne)
// let resultTwo = Math.sqrt(numberTwo)

// console.log(`Can bac hai so thu nhat ${resultOne}`)
// console.log(`Can bac hai so thu nhat ${resultTwo}`)


// let w = parseInt(prompt('Nhập cân nặng của bạn:', '50'));
// let h = parseFloat(prompt('Nhập chiều cao của bạn:(đơn vị mét)', 1.6));

// let BMI = w / (h**2);
// if (BMI < 18) {
//     console.log(`Bạn hơi gầy quá với chỉ số BMI: ${BMI}`);
// } else if (BMI >= 18 && BMI < 25) {
//     console.log(`Bạn quá đẹp với chỉ số BMI: ${BMI}`);
// } else {
//     console.log(`Bạn nên giảm cân xíu với chỉ số BMI: ${BMI}`);
// }

// function bmi(w, h) {
//     if (w <= 0 || h <=0) return -1;

//     let BMI = w / (h**2);
//     return BMI;
// }


// let w = parseInt(prompt('Nhập cân nặng của bạn:', '50'));
// let h = parseFloat(prompt('Nhập chiều cao của bạn:(đơn vị mét)', '1.6'));
// console.log(bmi(w, h));

// // bài 2

// let a = parseFloat(prompt('Nhập giá trị cạnh đáy','3.2'));
// let h = parseFloat(prompt('Nhập giá trị chiều cao'), '4.7');

// let s = (a*h)/2;

// console.log(`Diện tích hình tam giác là ${s}`)

// function areaOfTriangle(a, h) {
//     if (a < 0 && h < 0) return -1;

//     return (a*h)/2;
// }
// console.log(`Diện tích hình tam giác là ${areaOfTriangle(12.23, 5)}`);



// // bài 3

// let fahrenheit = parseFloat(prompt('Nhập độ F'))
// let celsius = (fahrenheit - 32) / 1.8

// console.log(`Độ F là ${fahrenheit} = ${celsius}oC`);

// if (celsius >= 37) {
//     console.log(`Trời nóng quá đi lên tới tận ${celsius}`);
// } else if (celsius < 37 && celsius >= 20) {
//     console.log(`Trời nay dễ chịu thật có ${celsius}`);
// } else if (celsius < 20 && celsius > 0) {
//     console.log(`Trời lạnh quá đi rét quá có ${celsius}`);
// } else {
//     console.log(`Đóng băng ${celsius}`);
// }

// // bài 4

// let km = parseFloat(prompt('Nhập số km:', '2'));
// let m = km * 1000;
// console.log(`${m} met`)