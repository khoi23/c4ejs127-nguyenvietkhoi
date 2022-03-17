
// bài 1

// let age = parseInt(prompt('Nhap so tuoi'))

// function checkAge(age) {
//     return age > 18 ? true : confirm('Did parents allow you?');
// }
// console.log(checkAge(age));

// function checkAge(age) {
//     return age > 18 || confirm('Did parents allow you?');
// }
// console.log(checkAge(age));



// bài 2
// let a = prompt('nhap a')
// let b = prompt('nhap b')

// function findMin(a, b, c) {
//     let min = a;
//     if (b < min) min = b;
//     if (c < min) min = c;
//     return min;
// }
// console.log(findMin(a, b, c));


// bài 3

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
// ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
// );


// let ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
// }
  
// // let agreed = () => { alert("You agreed.");};
// // let canceled = () => { alert("You canceled the execution.");};
// ask(
//     "Do you agree?",
//     () => { alert("You agreed."); },
//     () => { alert("You canceled the execution."); }
// )
function checkPassword (password) {
    if (password == 'cafedev') {
        console.log('Chào mừng!');
    } else if (password == '' || password == null) {
        console.log(`Đã hủy`);
    } else {
        console.log(`Mật khẩu sai`);
    }
} 
let account = prompt('Yêu cầu nhập tài khoản', 'Admin');
function checkAccount(account) {
    if (account == "Admin") {
        let password = prompt('Yêu cầu nhập mật khẩu', 'cafedev');
        checkPassword(password);
    } else if (account == '' || account == null) {
        console.log('Canceled')
    } else {
        console.log('Tôi không biết bạn');
    }
}
checkAccount(account)
