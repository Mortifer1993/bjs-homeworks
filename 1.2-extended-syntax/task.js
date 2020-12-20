// 'use strict'

function getResult(a, b, c){
    let x= [];
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    if ( discriminant === 0) {
        x.push( (-b + Math.sqrt(discriminant)) / (2 * a));
    } else if (discriminant > 0) {
        x.push( (-b + Math.sqrt(discriminant)) / (2 * a));
        x.push( (-b - Math.sqrt(discriminant)) / (2 * a));
    }
    return x;
}

// function getAverageMark(marks){
//     // код для задачи №2 писать здесь
//     // return averageMark;
// }

// function askDrink(name,dateOfBirthday){
//     // код для задачи №3 писать здесь
//     // return result;
// }