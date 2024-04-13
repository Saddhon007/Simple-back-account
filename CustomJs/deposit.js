// deposit button event
document.getElementById("depositBtn").addEventListener("click", () => {

    const newDepositAmount = getInputValueById("depositValue");
    const previousDeposit = getTextById("totalDeposit");
    const newDepositTotal = previousDeposit + newDepositAmount;
    setAmount("totalDeposit", newDepositTotal);

    const newBalanceAmount = getTextById("totalBalance");
    const newBalanceTotal = newBalanceAmount + newDepositAmount;
    setAmount("totalBalance", newBalanceTotal);
});