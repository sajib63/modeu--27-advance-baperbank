function getInputFieldValueById(inputFieldId){
    const inputField=document.getElementById(inputFieldId);
    const inputFieldValueString=inputField.value;
    const inputFieldValue=parseFloat(inputFieldValueString);
    inputField.value='';
  
    return inputFieldValue;
}




function getElementValueById(inputId){
    const element=document.getElementById(inputId);
    const elementValueString=element.innerText;
    const value=parseFloat(elementValueString);

    return value;

}

function setTextElementValueById(inputId, newValue){
    const element=document.getElementById(inputId);
    element.innerText=newValue;
}