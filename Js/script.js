// Input Feild  Handeler
const incomeAmout = document.getElementById('income');
const foodAmount = document.getElementById('food');
const rentAmount = document.getElementById('rent');
const clothesAmount = document.getElementById ('clothes');

const totalExpencesPrice =parseInt(foodAmount.value)+parseInt(rentAmount.value)+parseInt(clothesAmount.value);

// console.log("total------",totalExpencesPrice);
// const totalExpense = document.getElementById('total-expense').innerHTML=totalExpencesPrice;

const monthBlanceIncome = parseInt(incomeAmout.value) - totalExpencesPrice;
// clear the deposit input field

incomeAmout.value = '';
foodAmount.value = '';
rentAmount.value = '';
clothesAmount.value = '';

    // const monthTotal= document.getElementById('balance').innerHTML=monthBlanceIncome;

// Handle Event Handeler


document.getElementById('calculate-btn').addEventListener('click',function(){
    
const totalExpense = document.getElementById('total-expense').innerHTML=totalExpencesPrice;

  const monthTotal= document.getElementById('balance').innerHTML=monthBlanceIncome;
//    console.log(incomeAmout.value,foodAmount.value,rentAmount.value,clothesAmount.value)

});

// Handle Event Handeler

document.getElementById('save-amount').addEventListener('click',function(){

const saveMonthAmount = document.getElementById('save');
const saveAmountNumber = parseInt(saveMonthAmount.value);
console.log(saveAmountNumber);

const monthsavings = monthBlanceIncome/100*saveAmountNumber;

const savingAmount = document.getElementById('saving-amount').innerHTML=monthsavings;
console.log('monthsavings=------',monthsavings);

const remainingBlance = monthBlanceIncome-monthsavings;
const remainingBlanceTotal = document.getElementById('remaining-balance').innerHTML=remainingBlance;

// clear the deposit input field

saveMonthAmount.value ='';


});


