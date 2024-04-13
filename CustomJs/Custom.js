// Show and hide password 
document.getElementById("showHidePassword").addEventListener("click", () => {

    const password = document.getElementById("password");
    const showHidePassword = document.getElementById("showHidePassword");

    if (password.type == "password") {
        password.type = "text";
        showHidePassword.className = "fa-regular fa-eye";

    }
    else {
        password.type = "password";
        showHidePassword.className = "fa-regular fa-eye-slash";
    }
});


document.getElementById("submitBtn").addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.getElementById("email");
    const password = document.getElementById("password");


    if (email.value === 'sample@gmail.com' && password.value === '123456') {
        document.getElementById("mainLoginArea").style="display:none"
        document.getElementById("bankContainer").style="display:block"
    }

    else {
        window.alert("Wrong password. Your Password is 123456")
    }
});

// // Problem solve Step Number 1

// function depositController(Items) {

//     const depositValue = parseFloat(Items[0].value);
//     let totalDeposit = parseFloat(Items[1].innerText);
//     let totalBalance = parseFloat(Items[2].innerText);

//     if (Items[0].value === '') {
//         Items[3].innerText = "Please input a number";
//     }

//     else {
//         Items[1].innerText = totalDeposit + depositValue;
//         Items[2].innerText = totalBalance + depositValue;
//         Items[0].value = "";
//         Items[3].innerText = "";
//     }

// }


// function withdrawController(Items) {

//     const withdrawValue = parseFloat(Items[0].value);
//     let totalBalance = parseFloat(Items[1].innerText);
//     let totalWithdraw = parseFloat(Items[2].innerText);

//     if (Items[0].value === '') {
//         Items[3].innerText = "Please input a number";
//     }

//     else {
//         Items[1].innerText = totalBalance - withdrawValue;
//         Items[2].innerText = totalWithdraw + withdrawValue;
//         Items[0].value = "";
//         Items[3].innerText = "";
//     }

// }


// document.getElementById("depositBtn").addEventListener("click", () => {
//     const depositValue = document.getElementById("depositValue");
//     const totalDeposit = document.getElementById("totalDeposit");
//     const totalBalance = document.getElementById("totalBalance");
//     const errorMessage = document.getElementById("errorMessage");
//     const allItems = [depositValue, totalDeposit, totalBalance, errorMessage];
//     depositController(allItems);
// })

// document.getElementById("withdrawBtn").addEventListener("click", () => {
//     const withdrawValue = document.getElementById("withdrawValue");
//     const totalBalance = document.getElementById("totalBalance");
//     const totalWithdraw = document.getElementById("totalWithdraw");
//     const errorMessage= document.getElementById("errorMessage2");
//     const allItems = [withdrawValue, totalBalance, totalWithdraw, errorMessage];
//     withdrawController(allItems);
  
// })

