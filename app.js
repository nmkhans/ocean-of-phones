// Calculate total balance after expense

function convertNumber(field) {
    let input = document.getElementById(field);
    let inputText = input.value;
    if(isNaN(inputText) == false) {
        let inputValue = parseFloat(inputText);
        input.value = '';
        return inputValue;
    } else {
        document.getElementById('field_error').style.display = 'inline-block';
        input.value = '';
    }
    input.addEventListener('keyup', function() {
        document.getElementById('field_error').style.display = 'none';
    })
}

function calculateExpence() {
    let foodInput = convertNumber('food_input');
    let rentInput = convertNumber('rent_input');
    let clothInput = convertNumber('cloth_input');
    let totalExpence = foodInput + rentInput + clothInput;
    let showTotalExpence = document.getElementById('expenses_display');
    showTotalExpence.innerText = totalExpence;
    return totalExpence;
}

let balanceBtn = document.getElementById('balance_btn');
balanceBtn.addEventListener('click', function(event) {
    event.preventDefault();
    let incomeMoney = convertNumber('income_input');
    let totalExpence = calculateExpence();
    let balance = incomeMoney - totalExpence;
    let showBalance = document.getElementById('balance_display');
    showBalance.innerText = balance;
});

// calculate saving money and remaining

let savingBtn = document.getElementById('save_btn');
savingBtn.addEventListener('click', function(event) {
    event.preventDefault();
    let balance = document.getElementById('balance_display');
    let saveValue = convertNumber('save_field');
    let showSaving = document.getElementById('saving_diaplay');
    let showRemaining = document.getElementById('display_remaining');
    let balanceValue = parseFloat(balance.innerText);
    let savingAmount = balanceValue / saveValue;
    showSaving.innerText = savingAmount;
    let remaining = balanceValue - savingAmount;
    showRemaining.innerText = remaining;
});