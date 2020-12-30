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
    // код для задачи №2 писать здесь
    // return averageMark
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}