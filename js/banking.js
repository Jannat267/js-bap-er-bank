document.getElementById("deposit-btn").addEventListener('click', function() {
    // deposit  
    const deposit = parseFloat(document.getElementById("deposit-field").value);
    const previousDeposit = document.getElementById("deposit-amount");
    const previousDepositAmount = parseFloat(document.getElementById("deposit-amount").innerText);
    const totalDepositAmount = parseFloat(previousDepositAmount + deposit);
    previousDeposit.innerText = totalDepositAmount;
    const previousTotalText = document.getElementById('total');
    const previousTotalAmount = parseFloat(previousTotalText.innerText);

    const totalBalance = parseFloat(previousTotalAmount + deposit);

    previousTotalText.innerText = totalBalance;

    // clear deposit value
    document.getElementById("deposit-field").value = '';




})

document.getElementById("withdraw-btn").addEventListener('click', function() {
    // withdraw

    const withdraw = parseFloat(document.getElementById("withdraw-field").value);
    const previousWithdraw = document.getElementById("withdraw-amount");
    const previousWithdrawAmount = parseFloat(document.getElementById("withdraw-amount").innerText);
    const totalWithdrawAmount = parseFloat(previousWithdrawAmount + withdraw);
    previousWithdraw.innerText = totalWithdrawAmount;
    const previousTotalText = document.getElementById('total');
    const previousTotalAmount = parseFloat(previousTotalText.innerText);
    const totalBalance = parseFloat(previousTotalAmount - withdraw);
    previousTotalText.innerText = totalBalance;

    // clear withdraw amount
    document.getElementById("withdraw-field").value = '';

})