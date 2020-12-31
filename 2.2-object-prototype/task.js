'use strict'

String.prototype.isPalindrome = function(){
    let newString = this.toLowerCase().split(' ').join('');
    for(let i = newString.length - 1, a = 0; i >= 0 ; i--){
        if(newString[i] !== newString[a]){
            return false;
        }
        a++;
    }
    return true;
}

function getAverageMark(marks) {
    let totalSum = 0;

    if(marks.length === 0){
        return 0;
    }

    for (let i = 0; i < marks.length; i++){
        totalSum += marks[i];
    }

    let averageMark = totalSum / marks.length;
    let roundedAverage = Math.round(averageMark)
    return roundedAverage;
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}