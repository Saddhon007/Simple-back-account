// Get deposit and withdraw amount form input field and return INT number;

function getInputValueById(inputField) {

    const inputFieldGetById = document.getElementById(inputField);
    const inputFieldValue = inputFieldGetById.value;
    const netTotal = parseFloat(inputFieldValue);
    inputFieldGetById.value = '';

    return netTotal;

}
// Convert string to number and return INT number;
function getTextById(textFieldId) {

    const getTextById = document.getElementById(textFieldId);
    const getText = getTextById.innerText;
    const netTextValue = parseFloat(getText);

    return netTextValue;

}

//addition all INT number and set number
function setAmount(id, value) {
    const setId = document.getElementById(id);
    setId.innerHTML = value;

}
