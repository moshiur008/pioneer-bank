var login = document.getElementById('login');
login.addEventListener('click', function(event){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})

//Deposit Button Action

var depositBtn = document.getElementById('depositButton');
depositBtn.addEventListener('click', function(){

    let depositNumber = getNumber('depositAmount')

    updateDepositAndBalance('currentDeposit', depositNumber)
    updateDepositAndBalance('currentBalance', depositNumber)


    document.getElementById('depositAmount').value = "";
})

//Withdraw Button Action

var withdrawBtn = document.getElementById('withdrawButton');
withdrawBtn.addEventListener('click', function(event){

    let withdrawNumber = getNumber('withDrawAmount');

    updateDepositAndBalance('currentWithdraw', withdrawNumber);
    updateDepositAndBalance('currentBalance', -1 *withdrawNumber);
})

function updateDepositAndBalance(id, depositNumber){
    let deposit = document.getElementById(id);
    let currentValue = deposit.innerText;
    let currentNumber = parseFloat(currentValue);
    let total = depositNumber + currentNumber;
    deposit.innerText = total;
    
}

function getNumber(id){
    let value = document.getElementById(id).value;
    let amount = parseFloat(value);
    return amount;
}