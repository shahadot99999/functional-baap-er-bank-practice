
//step 1 event handler
document.getElementById('btn-deposit').addEventListener('click', function () {

    //step 2 deposit input field

    const depositField = getInputFieldValueById('deposit-field');

    //step 3 deposit element/value field
    const depositvalue = getTextElementValueById('deposit-total');

    // step 4 calculate total deposit

    const newDepositAmount = depositField + depositvalue;

    //step 5 set deposit totall value
    setTextElementValueById('deposit-total', newDepositAmount);

    //step 6

    const previousTotallBalence = getTextElementValueById('balance-total');
    const newTotallBalence = previousTotallBalence + newDepositAmount;

    setTextElementValueById('balance-total', newTotallBalence);

})