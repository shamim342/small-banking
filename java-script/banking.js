//  input function

function getInput(enterInput) {

    const inputField = document.getElementById(enterInput);
    const inputValue = parseFloat(inputField.value);
    inputField.value = '';

    return inputValue;
}
// get inner text
function getInnerText(text, getInputValue) {
    const innertext = document.getElementById(text);
    const innerValue = parseFloat(innertext.innerText);
    const totalDiposit = getInputValue + innerValue;
    innertext.innerText = totalDiposit;
    return innerValue;
}

// total balance 
function getTotalBalance(totalBalanceId, inputValue, isAdd) {
    const previousBalance = document.getElementById(totalBalanceId);
    const previousBalanceValue = parseFloat(previousBalance.innerText);

    if (isAdd == true) {

        previousBalance.innerText = previousBalanceValue + inputValue;

    } else if (isAdd == false) {

        previousBalance.innerText = previousBalanceValue - inputValue;
    }

}




document.getElementById('diposit-button').addEventListener('click', function() {

    // // diposit input 
    const dipositInputValue = getInput('diposit-input');
    if (dipositInputValue > 0 && typeof(dipositInputValue) == 'number') {

        getInnerText('diposit', dipositInputValue);
        getTotalBalance('balance', dipositInputValue, true);

    } else {
        const textError = document.getElementById('error');
        textError.innerText = 'Error : Enter positive value';

    }

})
document.getElementById('withdaw-button').addEventListener('click', function() {

    // diposit input 
    const withdrawInputValue = getInput('withdraw-input');
    const previousBalanceText = document.getElementById('balance');
    const previousBalanceValue = parseFloat(previousBalanceText.innerText);
    if (withdrawInputValue <= previousBalanceValue) {

        // // diposit inner text 
        getInnerText('withdraw', withdrawInputValue);

        // diposit count in balance
        getTotalBalance('balance', withdrawInputValue, false);

    } else {
        const textError = document.getElementById('error');
        textError.innerText = 'Error : You have not much money what you  want!!';

    }

})