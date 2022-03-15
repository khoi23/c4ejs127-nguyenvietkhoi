// bài 1 

let numberOne = prompt('Nhập số thứ nhất', '12.23');
let numberTwo = prompt('Nhập số thứ hai', '52.23');

if (typeof numberOne !== 'number' && typeof numberTwo !== 'number') {
    document.write(numberOne + " hoặc " + numberTwo + " is not a number <br/>")
} else {
    cong = numberOne + numberTwo;
    document.write("phep cong" + "" + cong + "<br/>")
    tru = numberOne - numberTwo;
    document.write("phep tru" + "" + tru + "<br/>")
    nhan = numberOne * numberTwo;
    document.write("phep nhan" + "" + nhan + "<br/>")
    chia = numberOne / numberTwo;
    document.write("phep chia" + "" + chia + "<br/>")
}

let x = parseFloat(prompt('Enter a positive number: '));

if (x >= 1) {
    if (x == 1) {
        console.log(`${x} equal to 1`);
    } else {
        console.log(`${x} greather than 1`);
    }
} else {
    console.log(`${x} less than 1`)
}