//step: 01 event handler
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //step: 02 get value withdraw field 
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    //step :03 get value withdraw deposit
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    //step: 04 Calcilate withdraw
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    //step: 05 withdraw set value 
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    //step 06 total  get value
    const previousBalanceTotal = getTextElementValueById('balance-total');
    //step 07 total calculate and set value
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})