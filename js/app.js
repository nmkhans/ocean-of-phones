/* Calculate total balance after expense */

// Convertion input value into number
function convertNumber(field) {
    let input = document.getElementById(field);
    let inputText = input.value;
    if (isNaN(inputText) == false) {
        let inputValue = parseFloat(inputText);
        if(inputValue > 0) {
            input.value = "";
            return inputValue;
        } else {
            document.getElementById('negetive_error').style.display = 'inline-block';
            input.value = "";
        }
    } else {
        document.getElementById("field_error").style.display = "inline-block";
        input.value = "";
    }
    input.addEventListener("keyup", function () {
        document.getElementById("field_error").style.display = "none";
    });
    input.addEventListener("keyup", function () {
        document.getElementById("expense_error").style.display =
                "none";
    });
    input.addEventListener("keyup", function () {
        document.getElementById("number_error").style.display = "none";
    });
    input.addEventListener("keyup", function () {
        document.getElementById("negetive_error").style.display = "none";
    });
}

// Calculate expenses
function calculateExpence() {
    let foodInput = convertNumber("food_input");
    let rentInput = convertNumber("rent_input");
    let clothInput = convertNumber("cloth_input");
    let totalExpence = foodInput + rentInput + clothInput;
    if(isNaN(totalExpence) == false) {
        let showTotalExpence = document.getElementById("expenses_display");
        showTotalExpence.innerText = totalExpence;
        return totalExpence;
    }
}

// Total balance money calculation
let balanceBtn = document.getElementById("balance_btn");
balanceBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let incomeMoney = convertNumber("income_input");
    let totalExpence = calculateExpence();
    if (incomeMoney > 0 && incomeMoney >= 99) {
        if (incomeMoney > totalExpence) {
            let balance = incomeMoney - totalExpence;
            let showBalance = document.getElementById("balance_display");
            showBalance.innerText = balance;
        } else {
            document.getElementById("expense_error").style.display =
                "inline-block";
        }
    } else {
        document.getElementById("number_error").style.display = "inline-block";
    }
});

// calculate saving money and remaining

let savingBtn = document.getElementById("save_btn");
savingBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let balance = document.getElementById("balance_display");
    let saveValue = convertNumber("save_field");
    let showSaving = document.getElementById("saving_diaplay");
    let showRemaining = document.getElementById("display_remaining");
    let balanceValue = parseFloat(balance.innerText);
    if (isNaN(saveValue) == false) {
        let savingAmount = balanceValue / saveValue;
        showSaving.innerText = savingAmount;
        let remaining = balanceValue - savingAmount;
        showRemaining.innerText = remaining;
    } else {
        document.getElementById('saving_field_error').style.display = 'block';
    }
    document.getElementById('save_field').addEventListener('keyup', function() {
        document.getElementById('saving_field_error').style.display = 'none';
    })
});
