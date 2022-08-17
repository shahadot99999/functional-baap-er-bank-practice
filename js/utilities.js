function getInputFieldValueById(inputField) {
    const depositInputField = document.getElementById(inputField);
    const depositInputFieldString = depositInputField.value;
    const depositFieldAmount = parseFloat(depositInputFieldString);
    depositInputField.value = '';
    return depositFieldAmount;
}

function getTextElementValueById(elementid) {
    const depositElementValue = document.getElementById(elementid);
    const depositElementValueString = depositElementValue.innerText;
    const depositElementAmount = parseFloat(depositElementValueString);

    return depositElementAmount;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}





