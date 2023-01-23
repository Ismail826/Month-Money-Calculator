// Input Feild  Handeler
const incomeAmout = document.getElementById('income');
const foodAmount = document.getElementById('food');
const rentAmount = document.getElementById('rent');
const clothesAmount = document.getElementById ('clothes');
const errorMessage =  document.getElementById ('error');

const totalExpencesPrice =parseInt(foodAmount.value)+parseInt(rentAmount.value)+parseInt(clothesAmount.value);
const monthBlanceIncome = parseInt(incomeAmout.value) - totalExpencesPrice;

// clear the deposit input field

incomeAmout.value = '';
foodAmount.value = '';
rentAmount.value = '';
clothesAmount.value = '';

// Handle Event Handeler

document.getElementById('calculate-btn').addEventListener('click',function(){

  let messages =[]
  if(isNaN(incomeAmout.value|| foodAmount.value || rentAmount.value || clothesAmount.value)){
    messages.push('Please Type Number value.');
    errorMessage.innerText=messages;
  }
 if(incomeAmout.value <0){
  messages.push('Please income Amount feild Type positive Number value.');
    errorMessage.innerText=messages;
  
}

if(foodAmount.value <0){
  messages.push('Please food Amount feild Type positive Number value.');
    errorMessage.innerText=messages;
 
}

if(rentAmount.value <0){
  messages.push('Please rent Amount feild Type positive Number value.');
    errorMessage.innerText=messages;
 
}

if(clothesAmount.value <0){
  messages.push('Please cloths Amount feild Type positive Number value.');
    errorMessage.innerText=messages;
 
}



const totalExpense = document.getElementById('total-expense').innerHTML=totalExpencesPrice;
const monthTotal= document.getElementById('balance').innerHTML=monthBlanceIncome;
});

// Handle Event Handeler
document.getElementById('save-amount').addEventListener('click',function(){
const saveMonthAmount = document.getElementById('save');
const saveAmountNumber = parseInt(saveMonthAmount.value);
console.log(saveAmountNumber);
const errorMessageTwo = document.getElementById('error1');

  let message =[]
  
     if(isNaN(saveMonthAmount.value)){
      message.push('Please Type Number value.');
      errorMessageTwo.innerText=message;
  }

  if(saveMonthAmount.value <0){
    message.push('Please Save Amount feild Type positive Number value.');
      errorMessageTwo.innerText=message;
    
  }

const monthsavings = monthBlanceIncome/100*saveAmountNumber;
const savingAmount = document.getElementById('saving-amount').innerHTML=monthsavings;
console.log('monthsavings=------',monthsavings);
const remainingBlance = monthBlanceIncome-monthsavings;
const remainingBlanceTotal = document.getElementById('remaining-balance').innerHTML=remainingBlance;

// clear the deposit input field
saveMonthAmount.value ='';
});

 // Error Message Text Color
const TextColorError = document.getElementById("error").style.color="red";

const TextColorErrorOne =document.getElementById("error1").style.color="red";