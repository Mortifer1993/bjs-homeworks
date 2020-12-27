'use strict'

function calculateTotalMortgage(percent, contribution, amount, date) {
    let errorParametr = '';
    let errorValue = '';
    let percentValue = +percent;
    let contributionValue = +contribution;
    let amountValue = +amount;

    switch (true){
        case (isNaN(percentValue)):
        errorParametr = 'проценты';
        errorValue = percent;
        break;
        case (isNaN(contributionValue)):
        errorParametr = 'первоначальный взнос';
        errorValue = contribution;
        break;
        case (isNaN(amountValue)):
        errorParametr = 'сумма кредита';
        errorValue = amount;
        break;
    }

    if(errorParametr || errorValue) {
        return `Параметр ${errorParametr} содержит неправильное значение "${errorValue}"`
    }

    let bodyOfTheLoan = amountValue - contributionValue;
    let today = new Date();
    let deadlineCredit = (date.getFullYear() - today.getFullYear()) * 12 - today.getMonth() + date.getMonth();
    let monthlyPercentage = percentValue / 100 / 12;
    let monthlyPayment = bodyOfTheLoan * (monthlyPercentage + monthlyPercentage / (((1 + monthlyPercentage) ** deadlineCredit) - 1));
    let totalAmount = Math.round(monthlyPayment * deadlineCredit * 100) / 100;
    console.log(totalAmount);
    return totalAmount;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}