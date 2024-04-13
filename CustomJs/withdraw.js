// withdraw button event

document.getElementById("withdrawBtn").addEventListener("click", () => {
    const newWithdrawAmount = getInputValueById("withdrawValue");
    const previousWithdrawAmount = getTextById("totalWithdraw");
    const totalWithdraw = previousWithdrawAmount + newWithdrawAmount;
    setAmount("totalWithdraw", totalWithdraw);

    const newBalance = getTextById("totalBalance");
    const previousBalance = newBalance - totalWithdraw;
    setAmount("totalBalance", previousBalance);

})

