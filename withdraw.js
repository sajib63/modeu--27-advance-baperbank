document.getElementById('btn-widthraw').addEventListener('click', function(){
    const newWithdrawAmount=getInputFieldValueById('Withdraw-feild');


    const previousWithdrawTotal=getElementValueById('withdraw-total');

    const newWithdrawTotal=previousWithdrawTotal+newWithdrawAmount;

    setTextElementValueById('withdraw-total', newWithdrawTotal);


    const previousTotalBalance=getElementValueById('balance-total');

    const newTotalBalance=previousTotalBalance-newWithdrawAmount;

    setTextElementValueById('balance-total', newTotalBalance);

})