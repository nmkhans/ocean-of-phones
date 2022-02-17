/* Calculate total balance after expense */

// Convertion input value into number
function convertNumber(field) {
    let input = document.getElementById(field);
    let inputText = input.value;
    let inputValue = parseFloat(inputText);

    // remove error
    input.addEventListener("keyup", function () {
        document.getElementById("field_error").style.display = "none";
        document.getElementById("negetive_error").style.display = "none";
        document.getElementById("expense_error").style.display = "none";
    });

    if (isNaN(inputValue) == false) {
        if (inputValue > 0) {
            return inputValue;
        } else {
            document.getElementById("negetive_error").style.display =
                "inline-block";
            return;
        }
    } else {
        document.getElementById("field_error").style.display = "inline-block";
        return;
    }
}

// Calculate expenses
function calculateExpence() {
    let foodInput = convertNumber("food_input");
    let rentInput = convertNumber("rent_input");
    let clothInput = convertNumber("cloth_input");
    let totalExpence = foodInput + rentInput + clothInput;
    if (isNaN(totalExpence) == false) {
        if (
            foodInput != "undefined" &&
            rentInput != "undefined" &&
            clothInput != "undefined"
        ) {
            return totalExpence;
        }
    }
}

// Total balance money calculation
let balanceBtn = document.getElementById("balance_btn");
balanceBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let incomeMoney = convertNumber("income_input");
    let totalExpence = calculateExpence();
    if (incomeMoney != "undefined") {
        if (incomeMoney > 0 && totalExpence > 0) {
            if (incomeMoney > totalExpence) {
                let balance = incomeMoney - totalExpence;
                let showTotalExpence =
                    document.getElementById("expenses_display");
                showTotalExpence.innerText = totalExpence;
                let showBalance = document.getElementById("balance_display");
                showBalance.innerText = balance;
            } else {
                document.getElementById("expense_error").style.display =
                    "inline-block";
            }
        }
    }
});

// convert Display
function convertDisplay(display) {
    let text = document.getElementById(display);
    let displayText = text.innerText;
    let displayValue = parseFloat(displayText);
    return displayValue;
}

// total income
function totalIncome() {
    let expence = convertDisplay("expenses_display");
    let balance = convertDisplay("balance_display");
    let total = expence + balance;
    return total;
}

// calculate saving money and remaining
let savingBtn = document.getElementById("save_btn");
savingBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let totalIncomes = totalIncome();
    let balanceValue = convertDisplay("balance_display");
    let saveInput = document.getElementById("save_field");
    let saveValueText = saveInput.value;
    let saveValue = parseFloat(saveValueText);
    if(isNaN(saveValue) == false && saveValue > 0) {
        let savedMoney = saveValue / 100;
        let showSaving = document.getElementById("saving_diaplay");
        let showRemaining = document.getElementById("display_remaining");
        debugger;
        let savingAmount = totalIncomes * savedMoney;
        if(balanceValue > savingAmount) {
            showSaving.innerText = savingAmount;
            let remaining = balanceValue - savingAmount;
            showRemaining.innerText = remaining;
        } else {
            document.getElementById('greater_error').style.display = 'inline-block';
        }
    } else {
        document.getElementById('save_field_error').style.display = 'inline-block';
    }
    
    saveInput.addEventListener('keyup', function() {
        document.getElementById('save_field_error').style.display = 'none';
        document.getElementById('greater_error').style.display = 'none';
    })
});
