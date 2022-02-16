// Calculate total balance after expense

function convertNumber(field) {
    let input = document.getElementById(field);
    let inputText = input.value;
    let inputValue = parseFloat(inputText);
    input.value = '';
    return inputValue;
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